import React from "react";
import { twMerge } from "tailwind-merge";

type TableDataProps = {
	className?: string;
	children: React.ReactNode;
};

function TableData({ className, children }: TableDataProps) {
	return (
		<td
			className={twMerge(
				"border-1 border-r-0 border-t-0 p-1",
				className
			)}>
			{children}
		</td>
	);
}

export default TableData;
