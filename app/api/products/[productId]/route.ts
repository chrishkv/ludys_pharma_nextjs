import { NextResponse, NextRequest } from "next/server";
import clienteMongo from '@/lib/mongodb'
import { ObjectId } from "mongodb";

async function connectDatabase() {
  const mongo = await clienteMongo
  return mongo.db(process.env.DATABASE_NAME)
}

// Obterner Producto por el id
export async function GET(req: NextRequest, { params }: { params: { productId: string } }) {
  try{
    const db = await connectDatabase()
    const cliente = await db.collection("productos").findOne({_id: new ObjectId(params.productId)})
    
    return await NextResponse.json(cliente, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

// Actualizar Producto por el id
export async function PUT(req: NextRequest, { params }: { params: { productId: string } }) {
  try {
    const clienteParams = await req.json()
    const db = await connectDatabase()
    const cliente = await db.collection("productos").updateOne({_id: new ObjectId(params.productId)},
    {
      $set: clienteParams
    })

    return await NextResponse.json(cliente, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

// Borrar Producto por el id
export async function DELETE(req: NextRequest, { params }: { params: { productId: string } }) {
  try {
    const db = await connectDatabase()
    const cliente = await db.collection("productos").deleteOne({_id: new ObjectId(params.productId)})

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
  