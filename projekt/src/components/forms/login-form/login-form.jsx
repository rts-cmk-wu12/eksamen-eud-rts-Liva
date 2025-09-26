'use client';

import { useActionState } from 'react';
import loginAction from './login-action';
import Loader from '@/components/loader';
import '@/scss/components/login-form.scss';

function LoginForm() {
    const [formState, formAction, isPending] = useActionState(loginAction);

    return (
        isPending ? <Loader styling='login-form__loading' />
            : (
                <form action={formAction} className="login-form">
                    <label>
                        <span className="login-form__label">email</span>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email..."
                            autoComplete='email'
                            defaultValue={formState?.data?.email}
                            className="login-form__input" />
                        <span className="login-form__error">{formState?.properties?.email?.errors}</span>
                    </label>
                    <label>
                        <span className="login-form__label">password</span>
                        <input
                            type="password"
                            name="password"
                            placeholder="Your password..."
                            autoComplete='current-password'
                            defaultValue={formState?.data?.password}
                            className="login-form__input" />
                        <span className="login-form__error">{formState?.properties?.password?.errors}</span>
                    </label>
                    <span className="login-form__error">{formState?.errors}</span>
                    <button type="submit" className="login-form__btn">login</button>
                </form>
            )
    );
}

export default LoginForm;