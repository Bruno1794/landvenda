'use server'
import {GET_LEADS} from "@/app/Api";

export type TypeClient = {
    id:number,
    name: string,
    email: string,
    fone: string,
    type_client: string,
}

export default async function getClient() {

    const {url} = GET_LEADS();
    const response = await fetch(url, {
        method: 'GET',

    });
    const {clients} = await response.json();
    return {clients};


}