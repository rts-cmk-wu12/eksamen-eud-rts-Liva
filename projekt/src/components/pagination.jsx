'use client';

import { useContext, useEffect } from "react";
import { listingsContext } from "./providers/listings-provider";
import { useRouter, useSearchParams } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import '@/scss/components/pagination.scss';

function Pagination({ listings }) {
    if (listings.length <= 6) return;

    const { setResults, allResults } = useContext(listingsContext);
    const searchParams = useSearchParams();
    const router = useRouter();
    const activePage = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

    const amountOfPages = Math.ceil(allResults.length / 6);

    useEffect(() => {
        if (allResults.length <= 6) return;

        const firstSlice = 6 * activePage - 6;
        const secondSlice = 6 * activePage;

        setResults(allResults.slice(firstSlice, secondSlice));
    }, [activePage, allResults]);

    if (allResults?.length > 6) return (
        <nav className="pagination">
            <button
                type="button"
                className="pagination__btn"
                disabled={activePage <= 1}
                onClick={() => router.push(`?page=${activePage - 1}`, {scroll: false})}
            ><FaArrowLeft />previous</button>

            {[...Array(amountOfPages)].map((_, index) => (
                <Link
                    href={`?page=${index + 1}`}
                    key={index}
                    className={activePage === index + 1
                        ? 'pagination__link active'
                        : 'pagination__link'}
                >{index + 1}</Link>
            ))}

            <button
                type="button"
                className="pagination__btn"
                disabled={activePage >= amountOfPages}
                onClick={() => router.push(`?page=${activePage + 1}`, {scroll: false})}
            >next<FaArrowRight /></button>
        </nav>
    )
}

export default Pagination;