import type { Transaction } from "../transaction/transaction.interface";
export interface IBlockData {
    transactions: Record<string, Transaction>;
    blockHash: string;
}
//# sourceMappingURL=blockData.interface.d.ts.map