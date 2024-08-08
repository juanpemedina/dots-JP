import React from "react";

/*
Reusable button for confirmation or positive actions.
*/

const ActionButton = React.forwardRef<HTMLButtonElement, ActionButtonProps>(
	function ActionButton({ children, onClick, type, ...props }, ref) {
		return (
			<button
				{...props}
				ref={ref}
				type={type}
				onClick={onClick}
				className="text-white text-lg bg-accent-green px-4 py-2 rounded-xl"
			>
				{children}
			</button>
		);
	}
);

interface ActionButtonProps {
	children: React.ReactNode;
	type?: "submit" | "reset" | "button" | undefined;
	onClick?: () => void;
}

export default ActionButton;
