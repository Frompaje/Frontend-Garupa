export interface Transfer {
  id: string;
  external_id: string;
  amount: number;
  expected_on: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export type CreateTransferResponse = {
  transfer: Transfer
}
