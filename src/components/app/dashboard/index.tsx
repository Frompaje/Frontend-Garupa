import { Filter } from "@/components/filter";
import { Transfer } from "@/types/transfer";
import { TransferTable } from "../../transfer-table";
import { CreateTransferDailog } from "@/components/create-transfer-dailog/create-transfer-dailog";

const data: Transfer[] = [
  {
    id: "123",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Completo",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
  {
    id: "321",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Completo",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
  {
    id: "1234",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Completo",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
  {
    id: "4321",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Completo",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
  {
    id: "12345",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Completo",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
  {
    id: "54321",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Completo",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
  {
    id: "123456",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Completo",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
  {
    id: "654321",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Completo",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
  {
    id: "1234567",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Em analise",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
  {
    id: "7654321",
    external_id: "123",
    amount: 100.8,
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
          <CreateTransferDailog />
        </div>
        <TransferTable transfer={data} />
      </div>
    </main>
  );
};
