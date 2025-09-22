import { FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Link from 'next/link';
import Image from "next/image";
import '@/scss/components/footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <nav className='footer-column'>
                <Link href='/' className="header__brand">
                    <Image
                        src='/logo.svg' alt="logo"
                        width={40} height={40}
                        priority />
                    SwapHub
                </Link>
                <div className="footer-column__media">
                    <Link href='https://x.com' target="_blank"><FaXTwitter className='footer-column__media-icon' /></Link>
                    <Link href='https://www.instagram.com' target="_blank"><FaInstagram className='footer-column__media-icon' /></Link>
                    <Link href='https://www.youtube.com' target="_blank"><FaYoutube className='footer-column__media-icon' /></Link>
                    <Link href='https://www.linkedin.com/feed' target="_blank"><FaLinkedin className='footer-column__media-icon' /></Link>
                </div>
            </nav>
            <ul className="footer-column">
                <h2 className="footer-column__heading">about SwapHub</h2>
                <li>How it works</li>
                <li>Community guidelines</li>
                <li>Our Mission</li>
                <li>Contact us</li>
            </ul>
            <ul className="footer-column">
                <h2 className="footer-column__heading">discover</h2>
                <li>Browse categories</li>
                <li>Popular Swaps</li>
                <li>Successful stories</li>
                <li>Upcoming events</li>
            </ul>
            <ul className="footer-column">
                <h2 className="footer-column__heading">support</h2>
                <li>Help Center</li>
                <li>FAQs</li>
                <li>Safety tips</li>
                <li>Report an issue</li>
            </ul>
        </footer>
    );
}

export default Footer;