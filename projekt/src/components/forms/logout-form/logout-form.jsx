'use client';

import { useActionState } from "react";
import { usePathname } from "next/navigation";
import logoutAction from "./logout-action";

function LogoutForm() {
    const [_, formAction] = useActionState(logoutAction);
    const pathname = usePathname();

    return (
        <form action={formAction}>
            <button type="submit" className="header__list-btn">logout</button>
            <input type="hidden" name="pathname" readOnly value={pathname} />
        </form>
    );
}

export default LogoutForm;