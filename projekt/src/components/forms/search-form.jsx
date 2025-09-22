'use client'

import { useActionState, useContext, useEffect } from "react";
import { listingsContext } from "../providers/listings-provider";
import { FiSearch } from "react-icons/fi";
import searchAction from "./search-action";
import '@/scss/components/search.scss';

function SearchForm() {
    const { setResults } = useContext(listingsContext);
    const [formState, formAction, isPending] = useActionState(searchAction);

    useEffect(() => {
        if (!formState || !formState.success) return;
        console.log(formState);

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
                <span className="search__error">{formState?.properties?.query?.errors}</span>
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