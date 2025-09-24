import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./nav-link";
import LogoutForm from "./forms/logout-form/logout-form";
import '@/scss/components/header.scss';

async function Header() {
    const cookieStore = await cookies();
    const userId = cookieStore.get('sh_user_id')?.value;

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
                    {userId ? (
                        <>
                            <li><NavLink defaultClass='header__list-item' path='/profile'>profile</NavLink></li>
                            <li><LogoutForm /></li>
                        </>
                    ) : (
                        <>
                            <li><NavLink defaultClass='header__list-btn' path='/login'>login</NavLink></li>
                            <li><NavLink defaultClass='header__list-btn header__list-btn--dark' path='/register'>register</NavLink></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;