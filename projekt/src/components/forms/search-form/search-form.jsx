'use client'

import { useActionState, useContext, useEffect } from "react";
import { listingsContext } from "../../providers/listings-provider";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import searchAction from "./search-action";
import sorter from "@/utils/sorter";
import SearchFilters from "./search-filters";
import '@/scss/components/search.scss';

function SearchForm({ listings }) {
    const { setResults, setAllResults, sorting, setFiltering } = useContext(listingsContext);
    const [formState, formAction, isPending] = useActionState(searchAction);
    const router = useRouter();

    useEffect(() => {
        const sortedListings = sorter(listings, sorting);
        setAllResults(sortedListings);
    }, []);

    useEffect(() => {
        if (isPending) {
            setResults([]);
            setAllResults([]);
        };
    }, [isPending]);

    useEffect(() => {
        if (!formState) return;

        router.replace('?page=1', { scroll: false });
        setFiltering('');

        if (!formState.success && formState.properties.query.errors) {
            const sortedListings = sorter(listings, sorting);
            setResults(sortedListings);
            setAllResults(sortedListings);
            return;
        };

        if (typeof (formState.results) === 'string') {
            setResults(formState.results);
            setAllResults([]);
            return;
        };

        setResults(formState.results);
        setAllResults(formState.results);
    }, [formState]);

    return (
        <form action={formAction} className="search">
            <div>
                <div className="search-field">
                    <label>
                        <input
                            type="search"
                            name="query"
                            autoComplete="off"
                            placeholder="Search"
                            defaultValue={formState?.query}
                            className="search-field__input" />
                    </label>
                    <button type="submit" className="search-field__icon"><FiSearch /></button>
                </div>
            </div>
            <SearchFilters />
        </form>
    );
}

export default SearchForm;