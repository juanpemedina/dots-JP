/*
A reusable component used display the header of a page
*/
export default function PageHeader({ children }: PageHeaderProps) {
	return (
		<div className="flex justify-between m-8 items-center">{children}</div>
	);
}

interface PageHeaderProps {
	children: React.ReactNode;
}
