import { TransferTable } from "../../transfer-table";
import { CreateTransferDailog } from "@/components/create-transfer-dailog/create-transfer-dailog";
import { SearchFilter } from "@/components/filter";

export const Dashboard = () => {
  return (
    <main className="pt-24 p-4">
      <div className="bg-white  rounded h-[780px]">
        <h1 className="text-gray-900 p-4 font-bold">Ultimos transações</h1>

        <div className="flex items-center gap-2">
          <SearchFilter />
          <CreateTransferDailog />
        </div>
        <TransferTable />
      </div>
    </main>
  );
};
