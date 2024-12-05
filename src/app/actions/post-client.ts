'use server'
import {POST_URL} from "@/app/Api";
import apiError from "@/functions/api-error";

export default async function postClient(state: object, formData: FormData) {
    const email = formData.get('email') as string | null;
    const fone = formData.get('fone') as string | null;
    try {
        if (!email || !email || !fone) throw new Error('Preencha os dados corretamente.');
        const {url} = POST_URL();
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        return {data: data, ok: true, error: null};

    } catch (error: unknown) {

        return apiError(error);
    }


}