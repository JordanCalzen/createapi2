import { InputProps } from "@/components/form";
import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) {
	const { slug } = await params;
	try {
		const singleProduct = await db.product.findFirst({
			where: {
				slug,
			},
		});
		return NextResponse.json(
			{
				message: "fetched",
				data: singleProduct,
				error: null,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				data: null,
				error: "Something went wrong",
			},
			{ status: 500 }
		);
	}
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) {
	const { slug } = await params;
	const data: InputProps = await request.json();
	const existingProduct = await db.product.findFirst();
	if (!existingProduct) {
		return NextResponse.json(
			{
				data: null,
				error: "No such product",
			},
			{ status: 404 }
		);
	}
	try {
		const deletedProduct = await db.product.delete({
			where: {
				slug,
			},
		});
		return NextResponse.json(
			{
				message: "Deleted",
				error: null,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				data: null,
				error: "Something went wrong",
			},
			{ status: 500 }
		);
	}
}

export async function PATCH(
	request: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) {
	const { slug } = await params;
	const data: InputProps = await request.json();
	const existingProduct = await db.product.findFirst();
	if (!existingProduct) {
		return NextResponse.json(
			{
				data: null,
				error: "No such product",
			},
			{ status: 404 }
		);
	}
	try {
		const updatedProduct = await db.product.update({
			where: {
				slug,
			},
			data,
		});
		return NextResponse.json(
			{
				message: "updated",
				data: updatedProduct,
				error: null,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				data: null,
				error: "Something went wrong",
			},
			{ status: 500 }
		);
	}
}
