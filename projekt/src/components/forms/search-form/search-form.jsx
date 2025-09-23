'use client'

import { useActionState, useContext, useEffect } from "react";
import { listingsContext } from "../../providers/listings-provider";
import { FiSearch } from "react-icons/fi";
import searchAction from "./search-action";
import '@/scss/components/search.scss';
import { useRouter } from "next/navigation";

function SearchForm({ listings }) {
    const { setResults, setAllResults } = useContext(listingsContext);
    const [formState, formAction, isPending] = useActionState(searchAction);
    const router = useRouter();

    useEffect(() => {
        setAllResults(listings);
    }, []);

    useEffect(() => {
        if (isPending) {
            setResults([]);
            setAllResults([]);
        };
    }, [isPending]);

    useEffect(() => {
        if (!formState) return;
        if (!formState.success && formState.properties.query.errors) {
            router.push('?page=1');
            setResults(listings);
            setAllResults(listings);
            return;
        };

        router.push('?page=1');
        if (typeof (formState.results) === 'string') {
            setResults(formState.results);
            setAllResults([]);
            return;
        };

        setResults(formState.results.slice(0, 6));
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