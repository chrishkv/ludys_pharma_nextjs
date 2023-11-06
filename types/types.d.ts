export type ClienteType = {
    _id: string,
    cedula: number,
    first_name: string,
    last_name: string,
    phone: number,
    address: string,
    email: string
}

enum DenominationMedicine {
    "Pastilla",
    "Crema",
    "Ampolla"
}

export type MedicinaType = {
    _id: string,
    name: string,
    price: number,
    stock: number,
    type: DenominationMedicine,
    components?: Array<string>,
    description?: string
}

enum DenominationProduct {
    "Caja",
    "Paquete",
    "Individual"
}

export type ProductoType = {
    _id: string,
    name: string,
    price: number,
    stock: number,
    type: DenominationProduct,
    description?: string
}