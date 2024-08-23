import { Block } from "../block/block";
import type { Transaction } from "../transaction/transaction.interface";
import type { User } from "../user/user.interface";
export declare class BlockChain {
    chain: Block[];
    private readonly peers;
    private users;
    private blockChainUser;
    private verifyBlockService;
    private readonly store;
    constructor();
    createGenesisBlock(): Block;
    getChain(): import("../block/block.interface").IBlock[];
    getLatestBlock(): import("../block/block.interface").IBlock;
    getBlockByHash(blockHash: string): Block;
    isValidChain(chain: Block[]): boolean;
    mineBlock(minerAddress: string): Block | undefined;
    replaceChain(newChain: Block[]): void;
    broadcastBlock(block: Block): void;
    broadcastUser(user: User): void;
    getTxs(): Transaction[];
    createTransaction({ sender, to, amount, signature, }: {
        sender: string;
        to: string;
        amount: number;
        signature: string;
    }): Transaction;
    addNewUserToChain(newUsers: User): boolean;
    createNewUser(): Promise<import("../user/user.interface").ReturnCreateUserDto>;
    getUserBalance(address: string): number;
    getAllUsers(): User[];
    private minerReward;
}
//# sourceMappingURL=chain.d.ts.map