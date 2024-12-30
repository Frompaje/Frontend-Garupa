
import { Filter } from "@/components/filter";

import { Transfer } from "@/types/transfer";
import { TransferTable } from "../TransferTable";


const transfers: Transfer[] = [
  {
    id: "123",
    external_id: "123",
    amount: 100.5,
    expected_on: "2024-12-30T14:00:00Z",
    status: "Completed",
    created_at: "2024-12-29 17:55:08.552217",
    updated_at: "2024-12-29 17:55:08.552217",
  },
];

export const Dashboard = () => {
  return (
    <main className="pt-24 p-4">
      <div className="bg-white  rounded h-[780px]">
        <h1 className="text-gray-900 p-4 font-bold">Ultimos transações</h1>
        <Filter />
        <TransferTable/>
      </div>
    </main>
  );
};
