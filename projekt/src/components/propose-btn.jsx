'use client';

import { useRouter } from "next/navigation";

function ProposeBtn({ listing, userId }) {
    const router = useRouter();

    return (
        <button
            type="button"
            onClick={() => router.push(`/propose-swap/${listing.id}`)}
            disabled={listing.userId === userId}
            title={listing.userId === userId
                ? 'Cannot trade with yourself'
                : 'Ask owner to trade'}
            className="listing-details__btn"
        >Propose a swap</button>
    );
}

export default ProposeBtn;