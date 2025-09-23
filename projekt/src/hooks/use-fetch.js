'use client';

import { useEffect, useState } from "react";
import myFetch from "@/utils/fetch";

// Følgende kode er udtaget fra et af mine tidligere projekter.
function useFetch(endpoint, options = {}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        myFetch(endpoint, options)
            .then(data => setData(data))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false));
    }, []);

    return { data, error, isLoading };
}

export default useFetch;