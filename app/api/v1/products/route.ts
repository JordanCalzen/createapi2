import { InputProps } from "@/components/form";
import { NextRequest, NextResponse } from "next/server";

export default async function POST(request: NextRequest) {
	const data: InputProps = await request.json();
	console.log(data);
	return NextResponse.json({
		data,
	});
}
