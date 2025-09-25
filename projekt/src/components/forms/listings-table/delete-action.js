'use server';

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

async function deleteListingAction(_, formData) {
    const { listingId } = Object.fromEntries(formData);

    const cookieStore = await cookies();
    const accessToken = cookieStore.get('sh_access_token').value;

    const response = await fetch(`http://localhost:4000/api/v1/listings/${listingId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    console.log(response);

    if (!response.ok) return {
        success: false,
        errors: ['Failed to delete listing. Try again later']
    };

    revalidatePath('http://localhost:3000/my-listings');

    return {
        success: true
    };
}

export default deleteListingAction;