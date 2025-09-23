import Link from "next/link";
import Image from "next/image";
import '@/scss/components/listing-card.scss';

function ListingsCard({ listings }) {
    return (
        listings.map(listing => (
            <li key={listing.id} className="listing-card">
                <Link href={`/listings/${listing.id}`}>
                    <Image
                        src={listing.asset.url}
                        alt={`${listing.title} cover`}
                        width={1024} height={1536}
                        quality={30}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEW2tLLDbwZkAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
                        className="listing-card__cover" />
                    <h2 className="listing-card__heading">{listing.title}</h2>
                </Link>
            </li>
        ))
    );
}

export default ListingsCard;