import { useState } from "react";
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialog = () => setIsDialogOpen(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className=" hover:bg-gray-700">Nova Transferência</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova Transferência </DialogTitle>
          <DialogDescription>
            Cria uma nova transferência no sistema
          </DialogDescription>
        </DialogHeader>
        <CreateTransferForm closeDialog={closeDialog} />
      </DialogContent>
    </Dialog>
  );
};
