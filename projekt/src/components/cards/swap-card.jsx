'use client';

import { useEffect, useState } from "react";
import myFetch from "@/utils/fetch";
import Link from "next/link";
import Image from "next/image";

function SwapCard({ id }) {
    const [listing, setListing] = useState(null);

    useEffect(() => {
        async function fetchListing() {
            const data = await myFetch(`api/v1/listings/${id}`);
            setListing(data);
        }

        fetchListing();
    }, [id]);

    if (listing) return (
        <section className="swap-card">
            <Link href={`/listings/${listing.id}`}>
                <Image
                    src={listing.asset.url}
                    alt={`${listing.title} cover`}
                    width={1024} height={1536}
                    quality={30}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEW2tLLDbwZkAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
                    className="swap-card__cover" />
            </Link>
            <h2 className="swap-card__title">{listing.title}</h2>
            <p>Owner: {`${listing.user.firstname} ${listing.user.lastname}`}</p>
        </section>
    );

    if (!listing) return <p>Loading...</p>
}

export default SwapCard;