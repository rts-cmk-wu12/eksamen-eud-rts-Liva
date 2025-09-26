import myFetch from "@/utils/fetch";
import UpdateForm from "@/components/forms/update-form/update-form";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const listing = await myFetch(`api/v1/listings/${id}`);

    return {
        title: `Update ${listing.title}`
    };
};

async function MyListingsEditPage({ params }) {
    const { id } = await params;
    const listing = await myFetch(`api/v1/listings/${id}`);

    return (
        <>
            <h1 className="heading">Update {listing.title}</h1>
            <UpdateForm listing={listing} />
        </>
    );
}

export default MyListingsEditPage;