'use client';
import React from "react";
import styles from './clientes.module.css'
import getClient, {TypeClient} from "@/app/actions/get-client";
import ListaCleinte from "@/componets/clientes/ListaCleinte";

export default function PageClientes() {
    const [data, setData] = React.useState<TypeClient[]>([]);

    React.useEffect(() => {
        async function listaCliente() {
            const {clients} = await getClient();
            setData(clients);
        }

        listaCliente();
    }, [])


    return (
        <section className={styles.sectionClientes}>
            <h1>Leads</h1>
            <br/>

            <table className={styles.tableClient}>
                <thead>
                <tr>
                    <th>E-mail</th>
                    <th>Açao</th>

                </tr>
                </thead>
                <tbody>
                <ListaCleinte data={data}/>
                </tbody>
            </table>


        </section>
    );
}