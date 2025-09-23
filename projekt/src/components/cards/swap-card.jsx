'use client';

import useFetch from "@/hooks/use-fetch";
import Link from "next/link";
import Image from "next/image";

function SwapCard({ id }) {
    const { data, error, isLoading } = useFetch(`api/v1/listings/${id}`);

    if (data) return (
        <section className="swap-card">
            <Link href={`/listings/${data.id}`}>
                <Image
                    src={data.asset.url}
                    alt={`${data.title} cover`}
                    width={1024} height={1536}
                    quality={30}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEW2tLLDbwZkAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
                    className="swap-card__cover" />
            </Link>
            <h2 className="swap-card__title">{data.title}</h2>
            <p>Owner: {`${data.user.firstname} ${data.user.lastname}`}</p>
        </section>
    );
}

export default SwapCard;