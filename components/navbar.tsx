import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
	return (
		<nav className="bg-white fixed top-0 w-full dark:bg-gray-950 shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link href="/" className="flex-shrink-0">
							<span className="text-xl font-bold text-gray-800 dark:text-gray-50">
								OnlineTrade
							</span>
						</Link>
					</div>
					<div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
						<div className="max-w-lg w-full lg:max-w-xs">
							<label htmlFor="search" className="sr-only">
								Search
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<Search
										className="h-5 w-5 text-gray-400"
										aria-hidden="true"
									/>
								</div>
								<Input
									id="search"
									name="search"
									className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-950"
									placeholder="Search"
									type="search"
								/>
							</div>
						</div>
					</div>
					<div className="flex items-center">
						<Button variant="ghost" asChild>
							<ModeToggle />
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
}
