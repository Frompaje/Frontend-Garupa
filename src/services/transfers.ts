import { API } from "@/lib/axios";
import { TransferCreated } from "@/types/transfer";

export class TransferService {
  static async create({ amount, external_id, expected_on }: TransferCreated) {
    const response = await API.post("/transfers", {
      amount,
      external_id,
      expected_on,
    });

    return response.data;
  }

  static async listAllTranfers() {
    const response = await API.get("/transfers/list");

    return response.data;
  }
}
