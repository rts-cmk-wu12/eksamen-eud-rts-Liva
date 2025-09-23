'use client';

import { createContext, useState } from "react";

export const swapContext = createContext(null);

function SwapProvider({ children }) {
    const [itemId, setItemId] = useState(null);

    return (
        <swapContext.Provider value={{ itemId, setItemId }}>
            {children}
        </swapContext.Provider>
    );
}

export default SwapProvider;