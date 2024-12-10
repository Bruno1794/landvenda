import {TypeClient} from "@/app/actions/get-client";
import Image from "next/image";
import Link from "next/link";


export default function ListaCleinte({data}: { data: TypeClient[] }) {

    return (
        <>
            {data?.map((item: TypeClient) => (

                <tr key={item.id}>
                    <td>{item.email}</td>
                    <td>
                        <Link href={`https://wa.me/${item.fone.replace(/[^0-9]/g, '')}`} target="_blank">
                            <Image src="/img/whatsapp.png" alt="whatsapp" width={18} height={18}/>
                        </Link>
                    </td>
                </tr>


            ))}


        </>
    );
}