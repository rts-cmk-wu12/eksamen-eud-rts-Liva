'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";
import myFetch from "@/utils/fetch";

async function createAction(_, formData) {
    const { cover, title, categoryId, description } = Object.fromEntries(formData);

    const schema = z.object({
        cover: z.file()
            .min(1_000, { message: 'File must be at least 1KB' })
            .max(5_000_000, { message: 'File must not be over 5MB' })
            .mime(['image/png', 'image/jpg', 'application/octet-stream'], { message: 'Filetype not allowed' }),
        title: z.string().min(1, { message: 'Title is required to continue' }),
        categoryId: z.string().min(1, { message: 'Category is required to continue' }),
        description: z.string().min(1, { message: 'Description is required to continue' }),
    });

    const validated = schema.safeParse({
        cover, title, categoryId, description
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error)),
        data: {
            title,
            categoryId,
            description
        }
    };

    const cookieStore = await cookies();
    const userId = cookieStore.get('sh_user_id').value;
    const accessToken = cookieStore.get('sh_access_token').value;

    const form = new FormData();
    form.append('file', validated.data.cover);

    const data = await myFetch('api/v1/assets', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        body: form
    });

    const response = await fetch('http://localhost:4000/api/v1/listings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
            title: validated.data.title,
            description: validated.data.description,
            assetid: data.id,
            userid: userId,
            categoryid: validated.data.categoryId
        })
    });

    if (!response.ok) return {
        success: false,
        errors: ['Could not create listing. Try again later']
    };

    redirect('/my-listings');
}

export default createAction;