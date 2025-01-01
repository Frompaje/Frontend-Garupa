import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
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
import { CurrencyInput } from "react-currency-mask";
import { useMutation } from "@tanstack/react-query";
import { TransferService } from "@/services/transfers";
import { toast } from "sonner";
import { AxiosError } from "axios";

const createTransferSchema = z.object({
  external_id: z
    .string()
    .max(6)
    .min(1, "ID Externo deve ter pelo menos 6 caractere."),
  amount: z.string().min(1),
  status: z.enum(["Aprovado", "Recusado", "Em analise"]),
  expected_on: z.string().optional(),
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
  const [isCheckedData, setIsCheckedData] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: TransferService.create,
    onSuccess: async () => {
      toast.success("Transferência criada com sucesso");
    },
    onError: async (error: AxiosError<{ message?: string }>) => {
      toast.error(
        error.response?.data?.message ||
          "Algo deu errado. Tente novamente mais tarde."
      );
    },
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<CreateTransferSchema>({
    resolver: zodResolver(createTransferSchema),
  });

  const statusValue = watch("status");

  function handleCreateTransfer(data: CreateTransferSchema) {
    if (isCheckedData === true) {
      data.expected_on = undefined;
    }

    console.log(data);
    mutate({
      external_id: data.external_id,
      amount: data.amount,
      status: data.status,
      expected_on: data.expected_on,
    });
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
        <Input
          maxLength={6}
          id="external_id"
          placeholder="DDT985"
          {...register("external_id")}></Input>
        {errors.external_id && (
          <span className="text-red-500 text-sm">
            {errors.external_id.message}
          </span>
        )}
      </div>
      <div>
        <Label>Valor da Transferência</Label>
        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <CurrencyInput
              onChangeValue={(__, _, amount) => {
                field.onChange(amount);
              }}
              InputElement={
                <Input
                  placeholder="R$ 180.00"
                  id="amount"
                  type="text"
                  {...register("amount")}></Input>
              }
            />
          )}
        />
        {errors.amount && (
          <span className="text-red-500 text-sm">
            {(errors.amount.message = "Valor da transferência é obrigatório.")}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between">
                  {statusValue
                    ? listStatus.find((status) => status.value === statusValue)
                        ?.label
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
                            field.onChange(currentValue);
                          }}>
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              statusValue === status.value
                                ? "opacity-100"
                                : "opacity-0"
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
          )}
        />
        {errors.status && (
          <span className="text-red-500 text-sm">
            {(errors.status.message = "Status é obrigatório")}
          </span>
        )}
      </div>

      <div className={cn("block", isCheckedData && "hidden")}>
        <Controller
          control={control}
          name="expected_on"
          render={({ field }) => (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[380px] justify-start text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}>
                  <CalendarIcon />
                  {field.value ? (
                    format(field.value, "PPP", { locale: ptBR })
                  ) : (
                    <span>Escolha a data da transferência</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  onSelect={(date) => field.onChange(date?.toISOString())}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          )}
        />
        {errors.expected_on && (
          <span className="text-red-500 text-sm">
            {errors.expected_on.message}
          </span>
        )}
      </div>
      <div className="flex items-center space-x-1">
        <Checkbox id="terms" onClick={handleCheckedBoxData} />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Não desejo colocar data para essa transferência
        </label>
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? "Carregando..." : "Criar Transferência"}
      </Button>
    </form>
  );
};
