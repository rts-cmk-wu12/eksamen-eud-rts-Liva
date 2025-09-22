'use client'

import { useContext, useEffect } from "react";
import { listingsContext } from "../providers/listings-provider";
import { FiSearch } from "react-icons/fi";
import '@/scss/components/search.scss';

function SearchForm({ listings }) {
    const { setResults } = useContext(listingsContext);

    useEffect(() => {
        setResults(listings.slice(0, 6));
    }, []);

    return (
        <form className="search">
            <div className="search-field">
                <label>
                    <input
                        type="search"
                        name="query"
                        autoComplete="off"
                        placeholder="Search"
                        className="search-field__input" />
                </label>
                <button type="submit" className="search-field__icon"><FiSearch /></button>
            </div>
            <div className="search-filter">
                <label>
                    <input type="radio" name="filter" className="search-filter__checkbox" defaultChecked />
                    <span>New</span>
                </label>
                <label>
                    <input type="radio" name="filter" className="search-filter__checkbox" />
                    <span>Price ascending</span>
                </label>
                <label>
                    <input type="radio" name="filter" className="search-filter__checkbox" />
                    <span>Price descending</span>
                </label>
            </div>
        </form>
    );
}

export default SearchForm;