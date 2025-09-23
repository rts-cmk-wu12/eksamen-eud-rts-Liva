import { cookies } from "next/headers";
import myFetch from "@/utils/fetch";
import Image from "next/image";
import ProposeBtn from "@/components/propose-btn";
import ListingOther from "@/components/listing-other";
import '@/scss/pages/details.scss';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const listing = await myFetch(`api/v1/listings/${id}`);

    return {
        title: listing.title
    };
};

async function ListingDetails({ params }) {
    const { id } = await params;
    const listing = await myFetch(`api/v1/listings/${id}`);

    const cookieStore = await cookies();
    const userId = Number(cookieStore.get('sh_user_id')?.value);

    const createdAt = new Date(listing.createdAt);
    const publishedDate = `${createdAt.getFullYear()}-${createdAt.getMonth() + 1}-${createdAt.getDate()}`;

    return (
        <>
            <div className="listing-details">
                <Image
                    src={listing.asset.url}
                    alt={`${listing.title} cover`}
                    width={1024} height={1536}
                    quality={30}
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEW2tLLDbwZkAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
                    className="listing-details__cover" />
                <section className="listing-details__info">
                    <h1 className="heading">{listing.title}</h1>
                    <p className="listing-details__text">{listing.description}</p>
                    <span>On SwapHub since: {publishedDate}</span>
                    {userId && <ProposeBtn listing={listing} userId={userId} />}
                </section>
            </div>
            <ListingOther ownerId={listing.userId} listingId={listing.id} />
        </>
    );
}

export default ListingDetails;