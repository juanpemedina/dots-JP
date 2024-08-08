import React from "react";

/*
Reusable button for confirmation or positive actions.
*/

const HelpButton = React.forwardRef<HTMLButtonElement, HelpButtonProps>(
	function InteractiveButton({ children, onClick, type, ...props }, ref) {
		return (
			<button
				{...props}
				ref={ref}
				type={type}
				onClick={onClick}
				className="text-white text-lg bg-accent-green px-1 py-2 rounded-full"
			>
				{children}
			</button>
		);
	}
);


interface HelpButtonProps {
	children: React.ReactNode;
	type?: "submit" | "reset" | "button" | undefined;
	onClick?: () => void;
}

export default HelpButton;