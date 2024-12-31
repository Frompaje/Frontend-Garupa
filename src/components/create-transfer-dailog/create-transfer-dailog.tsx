import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { CreateTransferForm } from "./create-transfer-form";

export const CreateTransferDailog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className=" hover:bg-gray-700">Nova Transferência</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova Transferência </DialogTitle>
          <DialogDescription>
            Cria uma nova transferência no sistema
          </DialogDescription>
        </DialogHeader>
        <CreateTransferForm />
      </DialogContent>
    </Dialog>
  );
};
