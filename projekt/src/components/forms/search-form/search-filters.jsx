'use client';

import { useContext } from "react";
import { listingsContext } from "@/components/providers/listings-provider";
import sorter from "@/utils/sorter";

function SearchFilters() {
    const { setResults, allResults, setAllResults, sorting, setSorting } = useContext(listingsContext);

    function handleSortingChange(e) {
        setSorting(e.target.value);

        if (!allResults.length) return;
        const sortedListings = sorter(allResults, e.target.value);
        setResults(sortedListings);
        setAllResults(sortedListings);
    };

    return (
        <div className="search-filter">
            <label>
                <input
                    type="radio"
                    name="filter"
                    value='new'
                    onChange={handleSortingChange}
                    defaultChecked={sorting === 'new'}
                    className="search-filter__checkbox" />
                <span>New</span>
            </label>
            <label>
                <input
                    type="radio"
                    name="filter"
                    value='old'
                    onChange={handleSortingChange}
                    defaultChecked={sorting === 'old'}
                    className="search-filter__checkbox" />
                <span>Old</span>
            </label>
            <label>
                <input
                    type="radio"
                    name="filter"
                    value='asc'
                    onChange={handleSortingChange}
                    defaultChecked={sorting === 'asc'}
                    className="search-filter__checkbox" />
                <span>A-Z</span>
            </label>
            <label>
                <input
                    type="radio"
                    name="filter"
                    value='desc'
                    onChange={handleSortingChange}
                    defaultChecked={sorting === 'desc'}
                    className="search-filter__checkbox" />
                <span>Z-A</span>
            </label>
        </div>
    );
}

export default SearchFilters;