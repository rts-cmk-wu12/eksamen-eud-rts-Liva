'use client';

import { createContext, useState } from "react";

export const listingsContext = createContext(null);

function ListingsProvider({ children }) {
    const [results, setResults] = useState([]);
    const [allResults, setAllResults] = useState([]);

    return (
        <listingsContext.Provider value={{ results, setResults, allResults, setAllResults }}>
            {children}
        </listingsContext.Provider>
    );
}

export default ListingsProvider;