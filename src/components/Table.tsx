import React from "react";
import TableData from "./TableData";
import TableHeader from "./TableHeader";

type TableProps = {
	headerColumns: string[];
	bodyData: any[];
	footerRow: any[];
};

function Table({ headerColumns, bodyData, footerRow }: TableProps) {
	return (
		<table className="border-spacing-0 border-separate rounded-md ">
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
			<tbody>
				<tr>
					{bodyData.map((data, i) =>
						i === bodyData.length - 1 ? (
							<TableData className="border-r-1" key={i}>
								{data}
							</TableData>
						) : (
							<TableData key={i}>{data}</TableData>
						)
					)}
				</tr>
			</tbody>
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
		</table>
	);
}

export default Table;
