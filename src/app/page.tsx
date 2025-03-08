import Table from "@/components/Table";
import { items } from "@/data/items";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const priceBookTableHeaders = [
		"ID",
		"UPC",
		"Name",
		"Size",
		"Promotional ID",
		"Price",
	];
	const body = items;

	return (
		<div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<header className="grid grid-cols-2">
				<Image
					alt="Stater Bros Logo in Red"
					src={"/staterLogo.png"}
					className="w-[250px] h-auto"
					width={3000}
					height={854}
					priority
				/>
				<div className="self-center justify-self-end flex flex-row gap-4">
					<Link href={"/"}>Batches</Link>
					<Link href={"/"}>Price Book</Link>
				</div>
			</header>
			<main className="flex flex-row gap-4">
				<Table headerColumns={priceBookTableHeaders} bodyData={body} />
			</main>
		</div>
	);
}
