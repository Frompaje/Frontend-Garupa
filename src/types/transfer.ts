export interface Transfer {
  id: string;
  external_id: string;
  amount: number;
  expected_on?: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export type CreateTransferResponse = {
  transfer: Transfer
}

export interface TransferCreated {
  external_id: string;
  amount: string;
  expected_on?: string;
}


export interface ListTransfersResponse {
  data: Transfer[]
  meta: Meta
}


export interface Meta {
  page: number
  take: number
  total: number
}
