'use client'

import { URL_API } from "@/config/envs"
import { ClienteType } from "@/types/types"
import Link from "next/link"
import { toast } from "react-toastify";

async function deleteRecord(clienteId : string) {
    await fetch(`${URL_API}/api/clients/${clienteId}`, {
        method: 'DELETE',
        }).then(response => {
            if (response.ok) toast.success('Cliente borrada correctamente')
            else toast.error('Ocurrio un error al intentar borrar cliente')
        })
        .catch(error => {
            toast.error('Ocurrio un error al intentar borrar cliente')
            console.log(error)
        })
}

export default function Cliente(cliente: ClienteType) {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow sm:pt-2 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-700">
            <div className="flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{ cliente.first_name } { cliente.last_name }</h5>
            </div>
            <div className="flow-root divide-y divide-gray-200 dark:divide-gray-700 pb-2">
                <div className="card-line">
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        { cliente.cedula }
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        { cliente.email }
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        { cliente.phone }
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        { cliente.address }
                    </div>
                    <div className="inline-flex items-center text-base font-se1mibold text-gray-900 dark:text-white">
                        <Link href="/">
                            <button className="btn blue-button" type='button'>
                                Editar
                            </button>
                        </Link>
                        &nbsp;
                        <button className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 red-button" onClick={ () => deleteRecord(cliente._id) }>Borrar</button>
                    </div>
                </div>
            </div>
        </div>

    )
}