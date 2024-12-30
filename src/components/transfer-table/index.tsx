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
import { formatAmount } from "@/helpers/formatAmount";
import { formatDate } from "@/helpers/formatDate";
import { Transfer } from "@/types/transfer";

type Props = {
  transfer: Transfer[];
};

export const TransferTable = ({ transfer }: Props) => {
  return (
    <Table>
      <TableCaption className={transfer && "hidden"}>
        Lista de transações
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Data de vencimento</TableHead>
          <TableHead>ID Externo</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Valor</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {transfer.map((value, index) => (
          <TableRow className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"}>
            <TableCell>{formatDate(value.expected_on)}</TableCell>
            <TableCell>{value.external_id}</TableCell>
            <TableCell className={colorStatus(value.status)}>
              {value.status}
            </TableCell>
            <TableCell>R$ {formatAmount(value.amount)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
