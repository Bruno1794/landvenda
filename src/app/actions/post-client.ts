'use server'
import {POST_URL} from "@/app/Api";
import apiError from "@/functions/api-error";

export default async function postClient(state: object, formData: FormData) {
    const fone = formData.get('fone') as string | null;

    function validatePhone(value:string) {
        const regexTelefone = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
        return regexTelefone.test(value);
    }


    try {
        if (!fone) throw new Error('Preencha os dados corretamente.');
        if (!validatePhone(fone)) throw new Error('Numero invalido')
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