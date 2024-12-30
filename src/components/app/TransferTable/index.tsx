import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


export const TransferTable = () => {
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
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell>$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
