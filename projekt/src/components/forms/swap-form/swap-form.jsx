'use client';

import { useContext } from "react";
import { swapContext } from "@/components/providers/swap-provider";

function SwapForm({ user }) {
    const { setItemId } = useContext(swapContext);

    function handleItemSelect(e) {
        const selectedItemId = e.target.selectedOptions[0].value;
        if (selectedItemId === '') {
            setItemId(null);
            return;
        };

        setItemId(Number(selectedItemId));
    };

    return (
        <>
            <form className="swap-menu">
                <label>
                    <span className="swap-menu__label">Choose an item to swap with</span>
                    <select name="selector" onChange={handleItemSelect}>
                        <option value="">--Items--</option>
                        {user.listings.map(listing => (
                            <option value={listing.id} key={listing.id}>{listing.title}</option>
                        ))}
                    </select>
                </label>
                <button type="submit" className="swap-menu__btn">Propose this Swap</button>
            </form>
        </>
    );
}

export default SwapForm;