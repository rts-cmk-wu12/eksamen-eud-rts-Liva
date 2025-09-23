import myFetch from "@/utils/fetch";
import ListingsCard from "./cards/listings-card";

async function ListingOther({ ownerId, listingId }) {
    const listings = await myFetch('api/v1/listings');

    const ownerListings = listings.filter(listing =>
        listing.userId === ownerId
        && listing.id !== listingId
    );

    if (ownerListings.length) return (
        <>
            <h2 className="heading">Other items from this Swapper</h2>
            <ul className="listing-other">
                <ListingsCard listings={ownerListings} />
            </ul>
        </>
    );
}

export default ListingOther;