import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Transfer } from "@/types/transfer";

type Props = {
  transfer: Transfer[];
};

export const TransferTable = ({ transfer }: Props) => {
  const formatDate = (isoDate: any) => {
    const date = new Date(isoDate).toLocaleString("pt-BR");

    return date;
  };
  return (
    <Table>
      <TableCaption className={transfer && "hidden"}>Lista de transações</TableCaption>
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
            <TableCell>{value.status}</TableCell>
            <TableCell>R$ {value.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
