import React from "react";
import { twMerge } from "tailwind-merge";

type TableHeaderProps = {
	className?: string;
	children: React.ReactNode;
};

function TableHeader({ className, children }: TableHeaderProps) {
	return (
		<th
			className={twMerge(
				"bg-stater-red border-1 border-stater-red border-r-0 p-1 text-stater-offwhite ",
				className
			)}>
			{children}
		</th>
	);
}

export default TableHeader;
