import { API } from "@/lib/axios";
import { ListTransfersResponse, Meta, TransferCreated } from "@/types/transfer";

export class TransferService {
  static async create({ amount, external_id, expected_on }: TransferCreated) {
    const response = await API.post("/transfers", {
      amount,
      external_id,
      expected_on,
    });

    return response.data;
  }

  static async list(params: { page?: string; take?: string; search?: string }) {
    const { data } = await API.get<ListTransfersResponse>("/transfers/list", {
      params,
    });

    return data;
  }
}
