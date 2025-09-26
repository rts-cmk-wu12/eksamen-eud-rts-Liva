'use client';

import { useActionState } from 'react';
import profileAction from './profile-action';
import '@/scss/components/profile-form.scss';

function ProfileForm({ data }) {
    const [formState, formAction, isPending] = useActionState(profileAction);

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
                                placeholder="New firstname..."
                                autoComplete='given-name'
                                defaultValue={data?.firstname}
                                className="profile-form__input" />
                            <span className="profile-form__error">{formState?.properties?.firstname?.errors}</span>
                        </label>
                        <label>
                            <span className="profile-form__label">lastname</span>
                            <input
                                type="text"
                                name="lastname"
                                placeholder="New lastname..."
                                autoComplete='family-name'
                                defaultValue={data?.lastname}
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
                                placeholder="New email..."
                                autoComplete='email'
                                defaultValue={data?.email}
                                className="profile-form__input" />
                            <span className="profile-form__error">{formState?.properties?.email?.errors}</span>
                        </label>
                        <label>
                            <span className="profile-form__label">password</span>
                            <input
                                type="password"
                                name="password"
                                placeholder="New password..."
                                autoComplete='new-password'
                                className="profile-form__input" />
                            <span className="profile-form__error">{formState?.properties?.password?.errors}</span>
                        </label>
                    </div>
                    <input type="hidden" name="old_firstname" readOnly value={data?.firstname} />
                    <input type="hidden" name="old_lastname" readOnly value={data?.lastname} />
                    <input type="hidden" name="old_email" readOnly value={data?.email} />
                    <input type="hidden" name="old_password" readOnly value={data?.password} />
                    <span className="profile-form__error">{formState?.errors}</span>
                    <span className="profile-form__success">{formState?.message}</span>
                    <button type="submit" className="profile-form__btn">save</button>
                </form>
            )
    );
}

export default ProfileForm;