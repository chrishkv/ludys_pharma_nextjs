'use client'

import { URL_API } from "@/config/envs"
import { MedicinaType } from "@/types/types"
import Link from "next/link"
import { toast } from "react-toastify";

async function deleteRecord(medicinaId : string) {
    await fetch(`${URL_API}/api/medicines/${medicinaId}`, {
        method: 'DELETE',
        }).then(response => {
            if (response.ok) toast.success('Medicina borrada correctamente')
            else toast.error('Ocurrio un error al intentar borrar medicina')
        })
        .catch(error => {
            toast.error('Ocurrio un error al intentar borrar medicina')
            console.log(error)
        })
}

export default function medicina(medicina: MedicinaType) {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow sm:pt-2 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-700">
            <div className="flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{ medicina.name }</h5>
            </div>
            <div className="flow-root divide-y divide-gray-200 dark:divide-gray-700 pb-2">
                <div className="card-line">
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        { medicina.price }
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        { medicina.stock }
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        { medicina.type }
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        { medicina.components }
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        { medicina.description }
                    </div>
                    <div className="inline-flex items-center text-base font-se1mibold text-gray-900 dark:text-white">
                        <Link href="/">
                            <button className="btn blue-button" type='button'>
                                Editar
                            </button>
                        </Link>
                        &nbsp;
                        <button className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 red-button" onClick={ () => deleteRecord(medicina._id) }>Borrar</button>
                    </div>
                </div>
            </div>
        </div>

    )
}