'use client';

import { useContext } from "react";
import { listingsContext } from "./providers/listings-provider";
import useFetch from "@/hooks/use-fetch";
import sorter from "@/utils/sorter";

function FilterCategories({ listings }) {
    const { setResults, setAllResults, sorting, filtering, setFiltering } = useContext(listingsContext);
    const { data } = useFetch('api/v1/categories');

    function handleFilterChange(e) {
        setFiltering(e.target.value);

        if (!listings.length) return;
        if (e.target.value === '') {
            setAllResults(sorter(listings, sorting));
            return;
        };

        const filteredListings = listings.filter(result =>
            result.categoryId === Number(e.target.value));
        setResults(sorter(filteredListings, sorting));
        setAllResults(sorter(filteredListings, sorting));
    };

    return (
        <div className="categories-filter">
            <h2 className="categories-filter__heading">categories</h2>
            <label className="categories-filter__label">
                <input
                    type="radio"
                    name="filter"
                    value=''
                    onChange={handleFilterChange}
                    checked={filtering === ''}
                    className="categories-filter__checkbox" />
                <span>All</span>
            </label>
            {data?.map(category => (
                <label key={category.id} className="categories-filter__label">
                    <input
                        type="radio"
                        name="filter"
                        value={category.id}
                        onChange={handleFilterChange}
                        className="categories-filter__checkbox" />
                    <span>{category.name}</span>
                </label>
            ))}
        </div>
    );
}

export default FilterCategories;