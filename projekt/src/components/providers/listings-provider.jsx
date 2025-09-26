'use client';

import { createContext, useState } from "react";

export const listingsContext = createContext(null);

function ListingsProvider({ children }) {
    const [results, setResults] = useState([]);
    const [allResults, setAllResults] = useState([]);
    const [sorting, setSorting] = useState('new');
    const [filtering, setFiltering] = useState('');

    const states = {
        results, setResults,
        allResults, setAllResults,
        sorting, setSorting,
        filtering, setFiltering
    };

    return (
        <listingsContext.Provider value={{ ...states }}>
            {children}
        </listingsContext.Provider>
    );
}

export default ListingsProvider;