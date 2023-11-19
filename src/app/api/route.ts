import { NextRequest, NextResponse } from "next/server";




export function GET(req: NextRequest) {

    const { searchParams } = new URL(req.url)

    const mesa = searchParams.get('mesa')


    return NextResponse.json({ mesa })

}