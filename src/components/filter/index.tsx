import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { ChevronsUpDown, Check, CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

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

export const Filter = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [date, setDate] = useState<Date>();

  return (
    <form>
      <div className="flex gap-2 p-4">
        <Input placeholder="ID Externo" />

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
              <CommandInput placeholder="Procurando o status..." />
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
                <span>Escolha a data</span>
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
        <Button className="bg-emerald-500 hover:bg-emerald-800">
          Limpar o filtro
        </Button>
      </div>
    </form>
  );
};
