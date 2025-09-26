'use client';

import { useActionState, useContext } from "react";
import { swapContext } from "@/components/providers/swap-provider";
import swapAction from "./swap-action";
import Loader from "@/components/loader";

function SwapForm({ user, requestedListingId }) {
    const { itemId, setItemId } = useContext(swapContext);
    const [formState, formAction, isPending] = useActionState(swapAction);

    function handleItemSelect(e) {
        const selectedItemId = e.target.selectedOptions[0].value;
        if (selectedItemId === '') {
            setItemId(null);
            return;
        };

        setItemId(Number(selectedItemId));
    };

    return (
        isPending ? <Loader styling='swap-menu__loading' /> : (
            <>
                <span className="swap-menu__error">{formState?.errors}</span>
                <form action={formAction} className="swap-menu">
                    <label>
                        <span className="swap-menu__label">Choose an item to swap with</span>
                        <select name="offeredListingId" onChange={handleItemSelect}>
                            <option value="">--Items--</option>
                            {user.listings.map(listing => (
                                <option value={listing.id} key={listing.id}>{listing.title}</option>
                            ))}
                        </select>
                    </label>
                    <input type="hidden" name="requestedListingId" value={requestedListingId} readOnly />
                    <input type="hidden" name="userId" value={user.id} readOnly />
                    <button
                        type="submit"
                        disabled={!itemId}
                        title={!itemId ? 'No item to swap with selected' : 'Ask owner for this swap'}
                        className="swap-menu__btn"
                    >Propose this Swap</button>
                </form>
            </>
        )
    );
}

export default SwapForm;