'use client'

import { useActionState } from "react";
import contactAction from "./contact-action";

function ContactForm() {
    const [formState, formAction, isPending] = useActionState(contactAction);

    return (
        isPending ? <p className="contact-form__loading">Loading...</p> : (
            <>
                <form action={formAction} className="contact-form">
                    <label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Your email..."
                            autoComplete="email"
                            defaultValue={formState?.data?.email}
                            className="contact-form__input" />
                        <span className="contact-form__error">{formState?.properties?.email?.errors}</span>
                    </label>
                    <button type="submit" className="contact-form__btn">Sign up</button>
                </form>
                <span className="contact-form__error">{formState?.errors}</span>
                <span className="contact-form__success">{formState?.message}</span>
            </>
        )
    );
}

export default ContactForm;