import React from "react";
import TableData from "./TableData";

type TableBodyProps = {
	data: Array<object>;
	hasFooter: boolean;
};

function TableBody({ data, hasFooter }: TableBodyProps) {
	function getClassname(
		objIndex: number,
		valueIndex: number,
		valuesLength: number
	) {
		if (objIndex === data.length - 1 && !hasFooter) {
			if (valueIndex === 0) return "border-r-1 rounded-bl-md";
			else if (valueIndex === valuesLength - 1)
				return "border-r-1 rounded-br-md";
		} else if (valueIndex === valuesLength - 1) return "border-r-1";
	}

	return (
		<tbody>
			{data.map((obj, i) => (
				<tr key={i}>
					{Object.values(obj).map((value, j) => (
						<TableData
							key={j}
							className={getClassname(
								i,
								j,
								Object.values(obj).length
							)}>
							{value}
						</TableData>
					))}
				</tr>
			))}
		</tbody>
	);
}

export default TableBody;
