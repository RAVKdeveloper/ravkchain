export declare enum BlockChainErrorCodes {
    CONNECT_NODE_ERROR = 100,
    IS_MY_NODE = 105,
    INVALID_CONSENSUS_STATUS = 101,
    INVALID_USERS_DATA_BY_NODE = 102,
    INVALID_TRANSACTIONS_DATA_BY_NODE = 103,
    INVALID_VERIFY_NEW_NODE = 104,
    INVALID_HASH_BLOCK = 201,
    BAD_GATEWAY = 200,
    DUPLICATE_DATA = 203,
    FAIL_BLOCKCHAIN_DUMP = 300,
    FAIL_NODES_DUMP = 301,
    FAIL_CREATE_DIR = 302,
    FAIL_NODE_ID_DUMP = 303,
    DOESNT_NOT_BLOCK_BY_HASH = 400,
    FAIL_SYNCHRONIZE_CHAIN = 401,
    FAIL_SAVE_NEW_USER_TO_STORE = 402,
    NOT_FOUND_ENTITY = 403,
    FAIL_SAVE_TRANSACTION_TO_MEM_PULL = 404,
    ERROR_IN_METADATA_STORE = 405,
    INVALID_VERIFY_TRANSACTION = 500,
    INVALID_USER_KEY = 501
}
export declare const BlockChainTextError: Record<BlockChainErrorCodes, string>;
//# sourceMappingURL=blockchain.code.errors.d.ts.map