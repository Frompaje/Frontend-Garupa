import { DialogClose, DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
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
        <DialogFooter>
          <DialogClose>
            <Button type="button" variant="outline">
              Cancelar
            </Button>
          </DialogClose>

          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
