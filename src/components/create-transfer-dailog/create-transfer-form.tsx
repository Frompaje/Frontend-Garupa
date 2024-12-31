import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { useState } from "react";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Checkbox } from "../ui/checkbox";

const createTransferSchema = z.object({
  externalId: z.string().max(6).min(1),
  amount: z.coerce.number(),
  expectedOn: z.string().datetime().optional(),
  status: z.enum(["Completo", "Recusado", "Em analise"]),
});

type CreateTransferSchema = z.infer<typeof createTransferSchema>;

const listStatus = [
  {
    value: "Aprovado",
    label: "Aprovado",
  },
  {
    value: "Em analise",
    label: "Em analise",
  },
  {
    value: "Recusado",
    label: "Recusado",
  },
];

export const CreateTransferForm = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [date, setDate] = useState<Date>();
  const [isCheckedData, setIsCheckedData] = useState(false);

  const { register, handleSubmit } = useForm<CreateTransferSchema>({
    resolver: zodResolver(createTransferSchema),
  });

  function handleCreateTransfer(data: CreateTransferSchema) {
    console.log(data);
  }

  function handleCheckedBoxData() {
    setIsCheckedData(!isCheckedData);
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateTransfer)}
      className="flex gap-4 flex-col">
      <div>
        <Label>ID Externo</Label>
        <Input placeholder="DDT985"></Input>
      </div>
      <div>
        <Label>Valor da Transferência</Label>
        <Input placeholder="R$ 180.00" type="number"></Input>
      </div>

      <div className="flex flex-col">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between">
              {value
                ? listStatus.find((status) => status.value === value)?.label
                : "Selecione o status"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandList>
                <CommandEmpty>Status não encontrado</CommandEmpty>
                <CommandGroup>
                  {listStatus.map((status) => (
                    <CommandItem
                      key={status.value}
                      value={status.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}>
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === status.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {status.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <div className={cn("block", isCheckedData && "hidden")}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[380px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}>
              <CalendarIcon />
              {date ? (
                format(date, "PPP", { locale: ptBR })
              ) : (
                <span>Escolha a data da transferência</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <Checkbox id="terms" onClick={handleCheckedBoxData} />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Não desejo colocar data para essa transferência
        </label>
      </div>
    </form>
  );
};
