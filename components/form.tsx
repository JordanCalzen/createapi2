"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
export type InputProps = {
	slug: string;
	name: string;
	price: number;
	qty: number;
	description: string;
	images: string[];
};
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function ProductForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<InputProps>();

	async function formSubmit(data: InputProps) {
		data.price = Number(data.price);
		data.qty = Number(data.qty);
		data.slug = data.name.split(" ").join("-").toLowerCase();
		console.log(data);
		try {
			const res = await fetch(`${baseUrl}/api/v1/products`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			console.log(data);
			reset();
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className="pt-[3rem]">
			<Card className="w-full  max-w-2xl">
				<CardHeader>
					<CardTitle>Add New Product</CardTitle>
				</CardHeader>
				<CardContent>
					<form className="space-y-4" onSubmit={handleSubmit(formSubmit)}>
						<div className="space-y-2">
							<Label htmlFor="productName">Product Name</Label>
							<Input
								id="productName"
								placeholder="Enter product name"
								{...register("name", { required: true })}
							/>
							{errors.name && (
								<span className="text-red-700">This field is required</span>
							)}
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="price">Price</Label>
								<Input
									id="price"
									type="number"
									placeholder="0.00"
									step="0.01"
									min="0"
									{...register("price", { required: true })}
								/>
								{errors.price && (
									<span className="text-red-700">This field is required</span>
								)}
							</div>
							<div className="space-y-2">
								<Label htmlFor="quantity">Quantity</Label>
								<Input
									id="quantity"
									type="number"
									placeholder="0"
									min="0"
									{...register("qty", { required: true })}
								/>
								{errors.qty && (
									<span className="text-red-700">This field is required</span>
								)}
							</div>
						</div>

						<div className="space-y-2">
							<Label htmlFor="description">Product Description</Label>
							<Textarea
								id="description"
								placeholder="Enter product description"
								{...register("description", { required: true })}
							/>
							{errors.description && (
								<span className="text-red-700">This field is required</span>
							)}
						</div>

						<div className="space-y-2">
							<Label htmlFor="image">Product Image</Label>
							<Input id="image" type="file" accept="image/*" />
						</div>

						<Button type="submit" className="w-full">
							Add Product
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
