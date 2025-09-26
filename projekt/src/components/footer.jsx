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
                        width={40} height={40} />
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
                <li><Link href='#'>How it works</Link></li>
                <li><Link href='#'>Community guidelines</Link></li>
                <li><Link href='#'>Our Mission</Link></li>
                <li><Link href='/contact'>Contact us</Link></li>
            </ul>
            <ul className="footer-column">
                <h2 className="footer-column__heading">discover</h2>
                <li><Link href='#'>Browse categories</Link></li>
                <li><Link href='#'>Popular Swaps</Link></li>
                <li><Link href='#'>Successful stories</Link></li>
                <li><Link href='#'>Upcoming events</Link></li>
            </ul>
            <ul className="footer-column">
                <h2 className="footer-column__heading">support</h2>
                <li><Link href='#'>Help Center</Link></li>
                <li><Link href='#'>FAQs</Link></li>
                <li><Link href='#'>Safety tips</Link></li>
                <li><Link href='#'>Report an issue</Link></li>
            </ul>
        </footer>
    );
}

export default Footer;