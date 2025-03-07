import React from "react";
import { twMerge } from "tailwind-merge";

type TableHeaderProps = {
	className?: string;
	children: React.ReactNode;
};

function TableHeader({ className, children }: TableHeaderProps) {
	return (
		<th className={twMerge("border-1 border-r-0 p-1", className)}>
			{children}
		</th>
	);
}

export default TableHeader;
