'use client'

import { ClienteType } from "@/types/types"
import Link from "next/link"

export default function Cliente(cliente: ClienteType) {
    return (
        <div className="w-full p-1 bg-white border border-gray-200 rounded-lg shadow sm:p-2 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-700">
            <div className="flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{ cliente.nombre } { cliente.apellido }</h5>
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
                        { cliente.telefono }
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        { cliente.direccion }
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <Link href="/">
                            <button className="btn blue-button" type='button'>
                                Editar
                            </button>
                        </Link>
                        &nbsp;
                        <Link href="/">
                            <button className="btn red-button" type='button'>
                                Borrar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}