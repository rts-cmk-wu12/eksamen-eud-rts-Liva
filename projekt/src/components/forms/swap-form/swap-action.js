'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function swapAction(_, formData) {
    const { offeredListingId, requestedListingId, userId } = Object.fromEntries(formData);

    const cookieStore = await cookies();
    const accessToken = cookieStore.get('sh_access_token').value;

    const response = await fetch('http://localhost:4000/api/v1/requests', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
            userid: userId,
            requestItem: Number(requestedListingId),
            offerItem: Number(offeredListingId)
        })
    });

    if (!response.ok) return {
        success: false,
        errors: ['Could not send request. Try again later'],
    };

    redirect('/');
}

export default swapAction;