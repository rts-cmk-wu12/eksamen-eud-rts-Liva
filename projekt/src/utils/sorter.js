'use client';

import { useEffect, useReducer } from "react";
import reducer from "./reducer";

function sorter(data, sorting) {
    const [state, dispatch] = useReducer(reducer, {
        ascending: true,
        sortBy: 'createdAt',
    });

    dispatch({ type: sorting });

    useEffect(() => {
        dispatch({ type: sorting });
    }, [sorting]);

    const sortedData = data.toSorted((a, b) => {
        const conditionA = a[state?.sortBy].toUpperCase();
        const conditionB = b[state?.sortBy].toUpperCase();

        switch (state?.ascending) {
            case true:
                if (conditionA < conditionB) {
                    return -1;
                };

                if (conditionA > conditionB) {
                    return 1;
                };
                break;

            case false:
                if (conditionA > conditionB) {
                    return -1;
                };

                if (conditionA < conditionB) {
                    return 1;
                };
                break;
        }

        return 0;
    });

    return sortedData;
}

export default sorter;