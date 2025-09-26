'use client';

import { useActionState } from "react";
import createAction from "./create-action";
import useFetch from "@/hooks/use-fetch";
import Loader from "@/components/loader";
import '@/scss/components/create-form.scss';

function CreateForm() {
    const [formState, formAction, isPending] = useActionState(createAction);
    const { data } = useFetch('api/v1/categories');

    return (
        isPending ? <Loader styling='create-form__loading' /> : (
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
                        placeholder="New title..." />
                    <span className="create-form__error">{formState?.properties?.title?.errors}</span>
                </label>
                <label>
                    <span className="create-form__label">category</span>
                    <select name="categoryId">
                        <option value="">--Categories--</option>
                        {data?.map(category => (
                            <option value={category.id} key={category.id}>{category.name}</option>
                        ))}
                    </select>
                    <span className="create-form__error">{formState?.properties?.categoryId?.errors}</span>
                </label>
                <label>
                    <span className="create-form__label">description</span>
                    <textarea
                        name="description"
                        autoComplete="off"
                        rows={5}
                        className="create-form__input create-form__input--textarea"
                        placeholder="New description..."
                    ></textarea>
                    <span className="create-form__error">{formState?.properties?.description?.errors}</span>
                </label>
                <span className="create-form__error create-form__error--center">{formState?.errors}</span>
                <button type="submit" className="create-form__btn">create</button>
            </form>
        )
    );
}

export default CreateForm;