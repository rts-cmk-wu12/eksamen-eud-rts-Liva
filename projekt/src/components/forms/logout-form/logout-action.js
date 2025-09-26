'use server';

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function logoutAction(_, formData) {
    const { pathname } = Object.fromEntries(formData);

    const cookieStore = await cookies();
    cookieStore.delete('sh_access_token');
    cookieStore.delete('sh_user_id');

    if (pathname.includes('/my-listings')
        || pathname.includes('/profile')
        || pathname.includes('/propose-swap')) {
        redirect('/login');
        return;
    };

    revalidatePath(pathname);
    return;
}

export default logoutAction;