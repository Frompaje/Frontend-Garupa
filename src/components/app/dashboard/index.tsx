import { Filter } from "@/components/filter";
import { Transfer } from "@/types/transfer";
import { TransferTable } from "../TransferTable";
import { Button } from "@/components/ui/button";

const data: Transfer[] = [
  {
    id: "12233",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Completo",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
  {
    id: "12323",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Completo",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
  {
    id: "1232",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Completo",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
  {
    id: "12324",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Completo",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
  {
    id: "12325",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Completo",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
  {
    id: "1232534",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Completo",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
  {
    id: "12325522",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Completo",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
  {
    id: "12325522525",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Completo",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
  {
    id: "123255225252",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Em analise",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
  {
    id: "123255225252",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Recusado",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
];

export const Dashboard = () => {
  return (
    <main className="pt-24 p-4">
      <div className="bg-white  rounded h-[780px]">
        <h1 className="text-gray-900 p-4 font-bold">Ultimos transações</h1>

        <div className="flex items-center">
          <Filter />
          <Button className="bg-gray-900 hover:bg-gray-700">
            Nova Transferência
          </Button>
        </div>
        <TransferTable transfer={data} />
      </div>
    </main>
  );
};
