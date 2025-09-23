'use client';

import { useContext } from "react";
import { listingsContext } from "../providers/listings-provider";
import ListingsCard from "../cards/listings-card";

function ListingsList() {
    const { results } = useContext(listingsContext);

    return (
        <>
            {typeof (results) === 'string' ? (
                <span className="listing-card__error">{results}</span>
            ) : (
                <ul className="listing">
                    {results.length
                        ? <ListingsCard listings={results} />
                        : <p>Loading...</p>}
                </ul>
            )}
        </>
    );
}

export default ListingsList;