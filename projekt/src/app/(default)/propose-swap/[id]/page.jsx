import { cookies } from "next/headers";
import myFetch from "@/utils/fetch";
import SwapProvider from "@/components/providers/swap-provider";
import SwapList from "@/components/lists/swap-list";
import SwapForm from "@/components/forms/swap-form/swap-form";
import '@/scss/pages/swap.scss';

export const metadata = {
    title: 'Propose a Swap'
};

async function ProposeSwapPage({ params }) {
    const { id } = await params;
    const cookieStore = await cookies();
    const userId = cookieStore.get('sh_user_id')?.value;
    const accessToken = cookieStore.get('sh_access_token')?.value;

    const user = await myFetch(`api/v1/users/${userId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    return (
        <>
            <h1 className="heading">Propose a Swap</h1>
            <SwapProvider>
                <SwapList requestedListingId={id} />
                <SwapForm user={user} requestedListingId={id} />
            </SwapProvider>
        </>
    );
}

export default ProposeSwapPage;