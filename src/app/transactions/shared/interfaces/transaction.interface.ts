export interface Transaction {
    id: number;
    transactionType: string;
    description: string;
    amount: number;
    transactionDate: string;
    familyMember: {
        id: number;
        name: string
    }
}

// export interface TransactionFamilyMemer {
//     id: number;
//     name: string
// }