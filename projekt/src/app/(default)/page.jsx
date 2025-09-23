import myFetch from "@/utils/fetch";
import ListingsProvider from "@/components/providers/listings-provider";
import SearchForm from "@/components/forms/search-form/search-form";
import ListingsList from "@/components/listings-list";
import Pagination from "@/components/pagination";

export const metadata = {
  title: "Home"
};

async function HomePage() {
  const listings = await myFetch('api/v1/listings');

  return (
    <>
      <h1 className="heading">Home</h1>
      <ListingsProvider>
        <SearchForm listings={listings} />
        <ListingsList />
        <Pagination listings={listings} />
      </ListingsProvider>
    </>
  );
}

export default HomePage;