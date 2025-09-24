'use client';

import { useContext } from "react";
import { listingsContext } from "@/components/providers/listings-provider";

function SearchFilters() {
    const { setSorting } = useContext(listingsContext);

    function handleSortingChange(e) {
        setSorting(e.value);
    };

    return (
        <div className="search-filter">
            <label>
                <input
                    type="radio"
                    name="filter"
                    value='new'
                    onChange={handleSortingChange}
                    className="search-filter__checkbox"
                    defaultChecked />
                <span>New</span>
            </label>
            <label>
                <input
                    type="radio"
                    name="filter"
                    value='old'
                    onChange={handleSortingChange}
                    className="search-filter__checkbox" />
                <span>Old</span>
            </label>
            <label>
                <input
                    type="radio"
                    name="filter"
                    value='asc'
                    onChange={handleSortingChange}
                    className="search-filter__checkbox" />
                <span>A-Z</span>
            </label>
            <label>
                <input
                    type="radio"
                    name="filter"
                    value='desc'
                    onChange={handleSortingChange}
                    className="search-filter__checkbox" />
                <span>Z-A</span>
            </label>
        </div>
    );
}

export default SearchFilters;