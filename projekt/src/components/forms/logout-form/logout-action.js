'use server';

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

async function logoutAction(_, formData) {
    const { pathname } = Object.fromEntries(formData);

    const cookieStore = await cookies();
    cookieStore.delete('sh_access_token');
    cookieStore.delete('sh_user_id');

    revalidatePath(`http://localhost:3000${pathname}`);

    return;
}

export default logoutAction;