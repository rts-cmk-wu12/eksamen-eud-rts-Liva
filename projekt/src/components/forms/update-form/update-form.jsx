'use client';

import { useActionState } from "react";
import updateAction from "./update-action";
import '@/scss/components/create-form.scss';

function UpdateForm({ listing }) {
    const [formState, formAction, isPending] = useActionState(updateAction);

    return (
        isPending ? <p className="create-form__loading">Loading...</p> : (
            <form className="create-form" action={formAction}>
                <label>
                    <span className="create-form__label">cover</span>
                    <input type="file" name="cover" accept="image/*" className="create-form__file" />
                    <span className="create-form__error">{formState?.properties?.cover?.errors}</span>
                </label>
                <label>
                    <span className="create-form__label">title</span>
                    <input
                        type="text"
                        name="title"
                        autoComplete="off"
                        className="create-form__input"
                        defaultValue={listing.title}
                        placeholder="New title..." />
                    <span className="create-form__error">{formState?.properties?.title?.errors}</span>
                </label>
                <label>
                    <span className="create-form__label">description</span>
                    <textarea
                        name="description"
                        autoComplete="off"
                        rows={5}
                        className="create-form__input create-form__input--textarea"
                        defaultValue={listing.description}
                        placeholder="New description..."
                    ></textarea>
                    <span className="create-form__error">{formState?.properties?.description?.errors}</span>
                </label>
                <input type="hidden" name="listingId" readOnly value={listing.id} />
                <span className="create-form__error create-form__error--center">{formState?.errors}</span>
                <button type="submit" className="create-form__btn">update</button>
            </form>
        )
    );
}

export default UpdateForm;