import Link from "next/link";
import Image from "next/image";
import NavLink from "./nav-link";
import '@/scss/components/header.scss';

function Header() {
    return (
        <header className="header">
            <Link href='/' className="header__brand">
                <Image
                    src='/logo.svg' alt="logo"
                    width={40} height={40}
                    priority />
                SwapHub
            </Link>
            <nav>
                <ul className="header__list">
                    <li><NavLink defaultClass='header__list-item' path='/'>listings</NavLink></li>
                    <li><NavLink defaultClass='header__list-item' path='/community'>community</NavLink></li>
                    <li><NavLink defaultClass='header__list-item' path='/contact'>contact</NavLink></li>
                    <li><NavLink defaultClass='header__list-btn' path='/login'>login</NavLink></li>
                    <li><NavLink defaultClass='header__list-btn header__list-btn--dark' path='/register'>register</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;