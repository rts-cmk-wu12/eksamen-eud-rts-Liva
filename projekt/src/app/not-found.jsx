import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import '@/scss/pages/not-found.scss';

function NotFound() {
    return (
        <>
            <Header />
            <main className="not-found">
                <h1 className="not-found__heading">404</h1>
                <h2 className="not-found__sub-heading">page not found</h2>
                <p className="not-found__text">
                    Hmm, it seems we couldn't find the page you are looking for.<br />
                    The page may have been moved, removed or you may have typed an incorrect address.
                </p>
                <Link href='/' className="not-found__btn">Return to home</Link>
            </main>
            <Footer />
        </>
    );
}

export default NotFound;