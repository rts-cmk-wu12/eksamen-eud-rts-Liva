'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

// Følgende kode er udtaget fra et af mine personlige projekter
function NavLink({ children, defaultClass, path }) {
    const pathname = usePathname().slice(1).split('/')[0];

    return (
        <Link
            href={path}
            className={`${defaultClass} ${pathname === path.slice(1) ? 'active' : ''}`}
        >
            {children}
        </Link>
    );
}

export default NavLink;