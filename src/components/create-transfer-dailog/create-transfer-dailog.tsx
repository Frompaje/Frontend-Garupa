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
        <Button className="hover:bg-gray-700 w-3/4 sm:w-1/5">
          Nova transferência
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova transferência </DialogTitle>
          <DialogDescription>
            Criar uma nova transferência no sistema
          </DialogDescription>
        </DialogHeader>
        <CreateTransferForm closeDialog={closeDialog} />
      </DialogContent>
    </Dialog>
  );
};
