'use client';

import { useActionState } from "react";
import registerAction from "./register-action";
import '@/scss/components/profile-form.scss';

function RegisterForm() {
    const [formState, formAction, isPending] = useActionState(registerAction);

    return (
        isPending ? <span className='profile-form__loading'>Loading...</span>
            : (
                <form action={formAction} className="profile-form">
                    <div className='profile-form__box'>
                        <label>
                            <span className="profile-form__label">firstname</span>
                            <input
                                type="text"
                                name="firstname"
                                placeholder="Your firstname..."
                                autoComplete='given-name'
                                defaultValue={formState?.data?.firstname}
                                className="profile-form__input" />
                            <span className="profile-form__error">{formState?.properties?.firstname?.errors}</span>
                        </label>
                        <label>
                            <span className="profile-form__label">lastname</span>
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Your lastname..."
                                autoComplete='family-name'
                                defaultValue={formState?.data?.lastname}
                                className="profile-form__input" />
                            <span className="profile-form__error">{formState?.properties?.lastname?.errors}</span>
                        </label>
                    </div>
                    <div className='profile-form__box'>
                        <label>
                            <span className="profile-form__label">email</span>
                            <input
                                type="text"
                                name="email"
                                placeholder="Your email..."
                                autoComplete='email'
                                defaultValue={formState?.data?.email}
                                className="profile-form__input" />
                            <span className="profile-form__error">{formState?.properties?.email?.errors}</span>
                        </label>
                        <label>
                            <span className="profile-form__label">password</span>
                            <input
                                type="password"
                                name="password"
                                placeholder="Your password..."
                                autoComplete='new-password'
                                defaultValue={formState?.data?.password}
                                className="profile-form__input" />
                            <span className="profile-form__error">{formState?.properties?.password?.errors}</span>
                        </label>
                    </div>
                    <span className="profile-form__error">{formState?.errors}</span>
                    <button type="submit" className="profile-form__btn">register</button>
                </form>
            )
    );
}

export default RegisterForm;