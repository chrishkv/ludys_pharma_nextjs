import { NextResponse, NextRequest } from "next/server";
import clienteMongo from '@/lib/mongodb'
import { ObjectId } from "mongodb";

async function connectDatabase() {
  const mongo = await clienteMongo
  return mongo.db(process.env.DATABASE_NAME)
}

// Obtener Cliente por el id
export async function GET(req: NextRequest, { params }: { params: { clientId: string } }) {
  try {
    const db = await connectDatabase()
    const cliente = await db.collection("clientes").findOne({_id: new ObjectId(params.clientId)})
    
    return await NextResponse.json(cliente, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

// Actualizar Cliente por el id
export async function PUT(req: NextRequest, { params }: { params: { clientId: string } }) {
  try {
    const clienteParams = await req.json()
    const db = await connectDatabase()
    const cliente = await db.collection("clientes").updateOne(
      {_id: new ObjectId(params.clientId)}, 
      {$set: clienteParams}
    )

    return await NextResponse.json(cliente, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

// Borrar cliente por el id
export async function DELETE(req: NextRequest, { params }: { params: { clientId: string } }) {
  try {
    const db = await connectDatabase()
    const cliente = await db.collection("clientes").deleteOne({_id: new ObjectId(params.clientId)})

    return await NextResponse.json(cliente, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
}
  