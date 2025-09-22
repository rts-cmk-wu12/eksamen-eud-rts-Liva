'use client';

import { createContext, useState } from "react";

export const listingsContext = createContext(null);

function ListingsProvider({ children }) {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    return (
        <listingsContext.Provider value={{ results, setResults, error, setError }}>
            {children}
        </listingsContext.Provider>
    );
}

export default ListingsProvider;