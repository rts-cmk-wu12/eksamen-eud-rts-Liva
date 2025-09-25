'use server';

import { redirect } from "next/navigation";
import z from "zod";

async function registerAction(_, formData) {
    const { firstname, lastname, email, password } = Object.fromEntries(formData);

    const schema = z.object({
        firstname: z.string().min(1, { message: 'Firstname must be filled' }),
        lastname: z.string().min(1, { message: 'Lastname must be filled' }),
        email: z.email({ message: 'Not a valid email' }),
        password: z.string().min(8, { message: 'Password must be 8 characters or more' }),
    });

    const validated = schema.safeParse({
        firstname,
        lastname,
        email,
        password
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error)),
        data: {
            firstname,
            lastname,
            email,
            password
        }
    };

    const response = await fetch('http://localhost:4000/api/v1/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: validated.data.firstname,
            lastname: validated.data.lastname,
            email: validated.data.email,
            password: validated.data.password
        })
    });

    if (!response.ok) return {
        success: false,
        errors: ['Could not create user. Try again later'],
        data: validated.data
    };

    redirect('/login');
}

export default registerAction;