/*
A main title for each page
*/

export default function PageTitle({ children }: PageTitleProps) {
	return <h1 className=" text-3xl text-dark-green font-bold">{children}</h1>;
}

interface PageTitleProps {
	children: string;
}
