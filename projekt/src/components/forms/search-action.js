'use server';

import z from "zod";
import myFetch from "@/utils/fetch";

export default async function searchAction(prevState, formData) {
    const { query } = Object.fromEntries(formData);

    const schema = z.object({
        query: z.string().min(1, { message: 'Searchfield may not be empty' }),
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
        success: false
    };

    return {
        success: true,
        results: filteredListings,
        query
    };
}