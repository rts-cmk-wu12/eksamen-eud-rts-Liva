'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";

async function loginAction(_, formData) {
    const { email, password } = Object.fromEntries(formData);

    const schema = z.object({
        email: z.string().min(1, { message: 'Email is required to continue' }),
        password: z.string().min(1, { message: 'Password is required to continue' }),
    });

    const validated = schema.safeParse({
        email, password
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error)),
        data: {
            email,
            password
        }
    };

    const response = await fetch('http://localhost:4000/auth/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: validated.data.email,
            password: validated.data.password
        })
    });

    if (!response.ok) return {
        success: false,
        errors: ['Email or password is invalid'],
        data: validated.data
    };

    const data = await response.json();

    const cookieStore = await cookies();
    cookieStore.set({
        name: 'sh_access_token',
        value: data.token,
        expires: data.validUntil
    });

    cookieStore.set({
        name: 'sh_user_id',
        value: data.userId,
        expires: data.validUntil
    });

    redirect('/');
}

export default loginAction;