import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { colorStatus } from "@/helpers/colorStatus";
import { formatDate } from "@/helpers/formatDate";
import { formatAmount } from "@/helpers/formatAmount";
import { useQuery } from "@tanstack/react-query";
import { TransferService } from "@/services/transfers";
import { Transfer } from "@/types/transfer";

export const TransferTable = () => {
  const { data, isLoading } = useQuery<Transfer[]>({
    queryKey: ["Table-Transfers"],
    queryFn: () => TransferService.listAllTranfers(),
    staleTime: 1000 * 60 * 5, // 5 MIN,
  });

  return (
    <Table>
      <TableCaption>Lista de transações</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Data de vencimento</TableHead>
          <TableHead>ID Externo</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Valor</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {isLoading && (
          <TableRow>
            <TableCell colSpan={4} className="text-center">
              Carregando...
            </TableCell>
          </TableRow>
        )}

        {data?.map((value, index) => (
          <TableRow
            key={value.id}
            className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"}>
            <TableCell>{formatDate(value.expected_on)}</TableCell>
            <TableCell>{value.external_id}</TableCell>
            <TableCell className={colorStatus(value.status)}>
              {value.status}
            </TableCell>
            <TableCell>{formatAmount(value.amount)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
