import { NextResponse, NextRequest } from "next/server";

export async function GET() {
    console.log("llamando a la API GET");
    return await NextResponse.json({message: "get"})
}

export async function POST(req: NextRequest) {
    const data = await req.json()
    console.log(data)
    return NextResponse.json({data: data})
}