import { TransferTable } from "../../transfer-table";
import { CreateTransferDailog } from "@/components/create-transfer-dailog/create-transfer-dailog";
import { SearchFilter } from "@/components/filter";

export const Dashboard = () => {
  return (
    <main className="pt-24 p-4">
      <div className="bg-white  rounded h-[780px]">
        <h1 className="text-gray-900 p-4 font-bold">Últimos transações</h1>

        <div className="flex items-center gap-2 sm:flex-row flex-col p-4" >
          <SearchFilter />
          <CreateTransferDailog />
        </div>
        <TransferTable />
      </div>
    </main>
  );
};
