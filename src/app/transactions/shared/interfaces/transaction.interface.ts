export interface Transaction {
    id: number;
    description: string;
    amount: number;
    transactionDate: string;
    familyMember: TransactionFamilyMember;
    transactionType: TransactionType;
}
        
    // familyMember: {
    //     id: number;
    //     name: string
    // };
    //  {
    //     id: number;
    //     name: string
    // }

export interface TransactionFamilyMember {
    id: number;
    name: string
}

export interface TransactionType {
    id: number;
    name: string
}