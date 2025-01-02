import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { colorStatus } from "@/helpers/colorStatus";
import { formatDate } from "@/helpers/formatDate";
import { formatAmount } from "@/helpers/formatAmount";
import { useQuery } from "@tanstack/react-query";
import { TransferService } from "@/services/transfers";
import { useSearchParams } from "react-router-dom";
import Pagination from "../pagination";

type TransferSearchParams = {
  page?: string;
  take?: string;
  search?: string;
};

export const TransferTable = () => {
  const [searchParams] = useSearchParams();

  const allSearchParams = Object.fromEntries(
    searchParams
  ) as TransferSearchParams;

  const { data, isLoading } = useQuery({
    queryKey: ["Table-Transfers", allSearchParams],
    queryFn: () => TransferService.list(allSearchParams),
    staleTime: 1000 * 60 * 5, // 5 MIN,
  });

  return (
    <div className="flex flex-col justify-between min-h-[640px] mr-4 ml-4">
      <Table>
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

          {data?.data.map((value, index) => (
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
      <div className="mt-auto">
        <Pagination
          isLoading={isLoading}
          total={data?.meta.total ?? 0}
          take={data?.meta.take ?? 10}
        />
      </div>
    </div>
  );
};
