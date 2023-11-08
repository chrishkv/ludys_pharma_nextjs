'use client'

import Medicina from "@/components/Medicina";
import { URL_API } from "@/config/envs"
import { MedicinaType } from "@/types/types";
import Link from "next/link";

async function getData() {
    return await fetch(`${URL_API}/api/medicines`,  { cache: 'no-store' })
        .then(response => {
            if (!response.ok) throw Error(response.status.toString())

            return response;
        })
        .then(response => response.json())
        .catch(error => console.log(error))
}

export default async function medicinasList() {
    const data = await getData()
    return (
        <div>
            <div className="p-2 bg-white dark:bg-gray-900 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <label htmlFor="table-search" className="sr-only">Buscar</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none"></svg>
                    </div>
                    <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar medicina"/>
                </div>
                <Link href="/medicinas/agregar">
                    <button className="btn blue-button text-sm font-medium" type='button'>
                        Agregar Medicina
                    </button>
                </Link>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                { data.map((medicine: MedicinaType) => (
                    <Medicina key={Number(medicine._id)} {...medicine} />
                ))}
            </div>
        </div>
    )
}