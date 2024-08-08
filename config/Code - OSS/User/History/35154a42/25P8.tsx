import * as AlertDialogRadix from "@radix-ui/react-alert-dialog";
import CancelButton from "./CancelButton";
import ActionButton from "./ActionButton";
import { ReactNode } from "react";

/*
Reusable alert dialog component.
*/

export default function AlertDialog({
	children,
	open,
	onOpenChange,
}: AlertDialogProps) {
	return (
		<AlertDialogRadix.Root open={open} onOpenChange={onOpenChange}>
			{children}
		</AlertDialogRadix.Root>
	);
}

function AlertDialogContent({
  title,
  description,
  action,
}: AlertDialogContentProps) {
  return (
    <AlertDialogRadix.Portal>
      <AlertDialogRadix.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />
      <AlertDialogRadix.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <AlertDialogRadix.Title className="m-0 text-[17px] font-medium">
          {title}
        </AlertDialogRadix.Title>
        <AlertDialogRadix.Description className="mt-4 mb-5 text-[15px] leading-normal">
          {description}
        </AlertDialogRadix.Description>
        <div className="flex justify-end gap-[25px]">
          <AlertDialogRadix.Cancel asChild>
            <CancelButton>Cancelar</CancelButton>
          </AlertDialogRadix.Cancel>
          <AlertDialogRadix.Action asChild>
            <ActionButton onClick={action}>Confirmar</ActionButton>
          </AlertDialogRadix.Action>
        </div>
      </AlertDialogRadix.Content>
    </AlertDialogRadix.Portal>
  );
}

AlertDialog.Trigger = AlertDialogRadix.Trigger;
AlertDialog.Content = AlertDialogContent;

interface AlertDialogProps {
	children: ReactNode;
	open?: boolean;
	onOpenChange?: (value: boolean) => void;
}

interface AlertDialogContentProps {
	title: string;
	description: string;
	action: () => void;
}
