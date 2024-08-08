import React from "react";

/*
Reusable button for cancellation or negative actions.
*/

const CancelButton = React.forwardRef<HTMLButtonElement, CancelButtonProps>(
	function CancelButton({ children, onClick, type, ...props }, ref) {
		return (
			<button
				{...props}
				ref={ref}
				type={type}
				onClick={onClick}
				className="text-accent-green text-lg bg-white border-accent-green border-2 px-4 py-2 rounded-xl"
			>
				{children}
			</button>
		);
	}
);

interface CancelButtonProps {
	children: React.ReactNode;
	type?: "submit" | "reset" | "button" | undefined;
	onClick?: () => void;
}

export default CancelButton;
