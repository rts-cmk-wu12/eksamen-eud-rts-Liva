'use server';

import z from "zod";
import myFetch from "@/utils/fetch";
import sorter from "@/utils/sorter";

export default async function searchAction(_, formData) {
    const { query, filter } = Object.fromEntries(formData);

    const schema = z.object({
        query: z.string().min(1, { message: 'Searchfield is empty' }),
    });

    const validated = schema.safeParse({
        query
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    };

    const listings = await myFetch('api/v1/listings');

    const filteredListings = listings?.filter(list => (
        list.title.toLowerCase().includes(query.toLowerCase())
        || list.description.toLowerCase().includes(query.toLowerCase())
    ));

    if (!filteredListings.length) return {
        success: true,
        results: 'No results found...',
        query
    };

    const sortedListings = sorter(filteredListings, filter);

    return {
        success: true,
        results: sortedListings,
        query,
    };
}