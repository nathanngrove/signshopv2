import React from "react";
import TableData from "./TableData";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

type TableProps = {
	headerColumns: Array<string>;
	bodyData: Array<object>;
	footerRow?: any[];
};

function Table({ headerColumns, bodyData, footerRow }: TableProps) {
	return (
		<table className="border-spacing-0 border-separate rounded-md w-full">
			<thead>
				<tr>
					{headerColumns.map((header, i) =>
						i === headerColumns.length - 1 ? (
							<TableHeader
								className="border-r-1 rounded-tr-md"
								key={i}>
								{header}
							</TableHeader>
						) : i === 0 ? (
							<TableHeader className="rounded-tl-md" key={i}>
								{header}
							</TableHeader>
						) : (
							<TableHeader key={i}>{header}</TableHeader>
						)
					)}
				</tr>
			</thead>
			<TableBody data={bodyData} hasFooter={footerRow ? true : false} />
			{footerRow ? (
				<tfoot>
					<tr>
						{footerRow.map((row, i) =>
							i === footerRow.length - 1 ? (
								<TableData
									className="border-r-1 rounded-br-md"
									key={i}>
									{row}
								</TableData>
							) : i === 0 ? (
								<TableData className="rounded-bl-md" key={i}>
									{row}
								</TableData>
							) : (
								<TableData key={i}>{row}</TableData>
							)
						)}
					</tr>
				</tfoot>
			) : null}
		</table>
	);
}

export default Table;
