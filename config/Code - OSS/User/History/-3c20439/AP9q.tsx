/*
A main title for each page
*/
import Popover from "../components/common/Popover";


export default function PageTitle({ children }: PageTitleProps) {
	return <h1 className=" text-3xl text-dark-green font-bold">{children}</h1>;
	<Popover/>

}

interface PageTitleProps {
	children: string;
}
