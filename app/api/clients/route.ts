import { NextResponse, NextRequest } from "next/server";
import clienteMongo from '@/lib/mongodb'

async function connectDatabase() {
  const mongo = await clienteMongo
  return mongo.db(process.env.DATABASE_NAME)
}

// Obterner todos los clientes
export async function GET() {
    const db = await connectDatabase()
    const clientes = await db.collection("clientes").find({}).toArray();

    return await NextResponse.json(clientes)
}

// Agregar nuevo cliente
export async function POST(req: NextRequest) {
  try {
    const cliente = await req.json()
    const db = await connectDatabase()
    const collectionClientes = db.collection('clientes');
    await collectionClientes.insertOne(cliente)

    return NextResponse.json({data: cliente}, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

export const config = {
    api: {
      externalResolver: true,
    },
  }
  