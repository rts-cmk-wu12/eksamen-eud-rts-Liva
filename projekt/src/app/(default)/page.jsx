import myFetch from "@/utils/fetch";
import ListingsProvider from "@/components/providers/listings-provider";
import FilterCategories from "@/components/filter-categories";
import SearchForm from "@/components/forms/search-form/search-form";
import ListingsList from "@/components/lists/listings-list";
import Pagination from "@/components/pagination";
import '@/scss/pages/home.scss';

export const metadata = {
  title: "Home"
};

async function HomePage() {
  const listings = await myFetch('api/v1/listings');

  return (
    <>
      <h1 className="heading">Home</h1>
      <ListingsProvider>
        <div className="home">
          <FilterCategories listings={listings} />
          <div className="home__search">
            <SearchForm listings={listings} />
            <ListingsList />
            <Pagination listings={listings} />
          </div>
        </div>
      </ListingsProvider>
    </>
  );
}

export default HomePage;