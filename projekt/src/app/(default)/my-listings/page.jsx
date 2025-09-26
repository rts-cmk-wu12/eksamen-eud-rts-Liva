import { cookies } from "next/headers";
import myFetch from "@/utils/fetch";
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

    const data = await myFetch(`api/v1/users/${userId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    return (
        <>
            <h1 className="heading">My Listings</h1>
            <div className="my-listings">
                <ListingsTable data={data} />
                <Link href='/my-listings/create' className="my-listings__create-link">Create new listing</Link>
            </div>
        </>
    );
}

export default MyListingsPage;