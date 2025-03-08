import Table from "@/components/Table";

export default function Home() {
	const headers = [
		"Header1",
		"Header2",
		"Header1",
		"Header2",
		"Header1",
		"Header2",
	];
	const body = ["Data", "data", "Data", "data", "Data", "data"];
	const footer = ["footer", "footerButton", "Data", "data", "Data", "data"];

	return (
		<div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main>
				<Table
					headerColumns={headers}
					bodyData={body}
					footerRow={footer}
				/>
			</main>
		</div>
	);
}
