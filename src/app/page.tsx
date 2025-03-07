import Table from "@/components/Table";

export default function Home() {
	const footerInput = () => {
		return <input type="text" />;
	};
	const footerButton = () => {
		return <button>Submit</button>;
	};

	const headers = ["Header1", "Header2"];
	const body = ["Data", "data"];
	const footer = [footerInput(), footerButton()];

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
