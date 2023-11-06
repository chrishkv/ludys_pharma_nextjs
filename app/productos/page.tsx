'use client'

import { URL_API } from "@/config/envs"
import Link from "next/link";

async function getData() {
    return await fetch(`${URL_API}/api/products`,  { cache: 'no-store' })
        .then(response => {
            if (!response.ok) throw Error(response.status.toString())

            return response;
        })
        .then(response => response.json())
        .catch(error => console.log(error))
}

export default function () {
    return (
        <div>
            <div className="p-2 bg-white dark:bg-gray-900 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
                </div>
                <Link href="/productos/agregar">
                    <button className="btn blue-button text-sm font-medium" type='button'>
                    Agregar Producto
                    </button>
                </Link>
            </div>
            <h1>Lista de productos</h1>
        </div>
    )
}