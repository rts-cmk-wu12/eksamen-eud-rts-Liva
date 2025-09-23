'use client';

import { useContext } from "react";
import { swapContext } from "../providers/swap-provider";
import { IoIosSwap } from "react-icons/io";
import SwapCard from "../cards/swap-card";

function SwapList({ requestedListingId }) {
    const { itemId } = useContext(swapContext);

    return (
        <div className="swap">
            <SwapCard id={requestedListingId} />
            <IoIosSwap className="swap__icon" />
            {itemId && <SwapCard id={itemId} />}
        </div>
    );
}

export default SwapList;