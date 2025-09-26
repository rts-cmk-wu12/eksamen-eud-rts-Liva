'use client';

import { useActionState, useEffect, useReducer } from "react";
import { FaPen, FaTrash } from "react-icons/fa6";
import deleteListingAction from "./delete-action";
import reducer from "@/utils/reducer";
import Link from "next/link";

function ListingsTable({ data }) {
    const [formState, formAction, isPending] = useActionState(deleteListingAction);
    const [state, dispatch] = useReducer(reducer, {
        showModal: false,
        listingId: null
    });

    useEffect(() => {
        if (!formState || isPending) return;

        if (formState.success) {
            dispatch({ type: 'hideModal' });
        };
    }, [formState, isPending]);

    return (
        <>
            {!data.listings.length && <p>No listings found</p>}
            {data?.listings.length > 0 && (
                <table className="my-listings-table">
                    <thead>
                        <tr>
                            <th className="my-listings-table__heading">title</th>
                            <th className="my-listings-table__heading">options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.listings.map(listing => (
                            <tr key={listing.id}>
                                <td>{listing.title}</td>
                                <td className="my-listings-table__options">
                                    <Link href={`/my-listings/edit/${listing.id}`}><FaPen /></Link>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            dispatch({ type: 'showModal', listingId: listing.id })}
                                    ><FaTrash /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {state?.showModal && (
                <div className="overlay">
                    <form action={formAction} className="overlay-modal">
                        <span className="overlay-modal__heading">Are you sure?</span>
                        <span className="overlay-modal__error">{formState?.errors}</span>
                        <div className="overlay-modal__buttons">
                            <button
                                type="button"
                                className="overlay-modal__btn"
                                onClick={() =>
                                    dispatch({ type: 'hideModal' })}
                            >cancel</button>
                            <input type="hidden" name="listingId" readOnly value={state?.listingId} />
                            <button
                                type="submit"
                                className="overlay-modal__btn"
                            >delete</button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}

export default ListingsTable;