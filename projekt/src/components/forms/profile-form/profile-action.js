'use server';

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import z from "zod";

async function profileAction(_, formData) {
    const {
        firstname, old_firstname,
        lastname, old_lastname,
        email, old_email,
        password, old_password
    } = Object.fromEntries(formData);

    const updatedValues = {
        firstname: old_firstname,
        lastname: old_lastname,
        email: old_email,
        password: old_password
    };

    // Denne del med conditional statements er udtaget fra en opgave lavet sammen i skolen
    if (firstname !== old_firstname) updatedValues.firstname = firstname;
    if (lastname !== old_lastname) updatedValues.lastname = lastname;
    if (email !== old_email) updatedValues.email = email;
    if (password !== old_password) updatedValues.password = password;

    const schema = z.object({
        firstname: z.string().min(1, { message: 'Firstname must be filled' }),
        lastname: z.string().min(1, { message: 'Lastname must be filled' }),
        email: z.email({ message: 'Not a valid email' }),
        password: z.string().min(8, { message: 'Password must be 8 characters or more' }),
    });

    const validated = schema.safeParse(updatedValues);

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error)),
    };

    const cookieStore = await cookies();
    const userId = cookieStore.get('sh_user_id').value;
    const accessToken = cookieStore.get('sh_access_token').value;

    const response = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(updatedValues)
    });


    if (!response.ok) return {
        success: false,
        errors: ['Could not update profile. Try again later']
    };

    revalidatePath('/profile');

    return {
        success: true,
        message: ['Successfully updated profile!']
    };

}

export default profileAction;