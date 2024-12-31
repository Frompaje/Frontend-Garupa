import { API } from "@/lib/axios";
import { TransferCreated } from "@/types/transfer";

export class TransferService {
  static async create({
    amount,
    external_id,
    status,
    expected_on,
  }: TransferCreated) {
    const response = await API.post("/transfers", {
      amount,
      external_id,
      status,
      expected_on,
    });

    console.log(response);

    return response.data;
  }
}
