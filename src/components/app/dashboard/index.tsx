import { Filter } from "@/components/filter";
import { TransferTable } from "../../transfer-table";
import { CreateTransferDailog } from "@/components/create-transfer-dailog/create-transfer-dailog";

export const Dashboard = () => {
  return (
    <main className="pt-24 p-4">
      <div className="bg-white  rounded h-[780px]">
        <h1 className="text-gray-900 p-4 font-bold">Ultimos transações</h1>

        <div className="flex items-center">
          <Filter />
          <CreateTransferDailog />
        </div>
        <TransferTable />
      </div>
    </main>
  );
};
