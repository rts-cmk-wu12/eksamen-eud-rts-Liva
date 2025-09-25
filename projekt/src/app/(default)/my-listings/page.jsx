import { cookies } from "next/headers";
import ListingsTable from "@/components/forms/listings-table/listings-table";
import Link from "next/link";
import '@/scss/pages/my-listings.scss';

export const metadata = {
    title: 'My Listings'
};

async function MyListingsPage() {
    const cookieStore = await cookies();
    const userId = cookieStore.get('sh_user_id').value;
    const accessToken = cookieStore.get('sh_access_token').value;

    return (
        <>
            <h1 className="heading">My Listings</h1>
            <div className="my-listings">
                <ListingsTable userId={userId} accessToken={accessToken} />
                <Link href='/my-listings/create' className="my-listings__create-link">Create new listing</Link>
            </div>
        </>
    );
}

export default MyListingsPage;