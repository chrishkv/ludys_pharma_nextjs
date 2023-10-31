import { NextResponse, NextRequest } from "next/server";
import clientPromise from '@/lib/mongodb'

export async function GET() {
    const client = await clientPromise;
    const db = client.db("laravel-mongodb");
    const allPosts = await db.collection("test").find({}).toArray();

    console.log(allPosts);
    return await NextResponse.json({message: "get"})
}

export async function POST(req: NextRequest) {
    const data = await req.json()
    console.log(data)
    return NextResponse.json({data: data})
}

export const config = {
    api: {
      externalResolver: true,
    },
  }
  