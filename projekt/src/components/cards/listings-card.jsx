'use client';

import { useContext } from "react";
import { listingsContext } from "../providers/listings-provider";
import Image from "next/image";
import '@/scss/components/listing-card.scss';

function ListingsCard() {
    const { results } = useContext(listingsContext);

    return (
        <>
            {typeof (results) === 'string' ? (
                <span className="listing-card__error">{results}</span>
            ) : (
                <ul className="listing">
                    {results.length ? (
                        results.map(listing => (
                            <li key={listing.id} className="listing-card">
                                <Image
                                    src={listing.asset.url}
                                    alt={`${listing.title} cover`}
                                    width={1024} height={1536}
                                    quality={30}
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEW2tLLDbwZkAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
                                    className="listing-card__cover" />
                                <h2 className="listing-card__heading">{listing.title}</h2>
                            </li>
                        ))
                    ) : <p>Loading...</p>}
                </ul>
            )}
        </>
    );
}

export default ListingsCard;