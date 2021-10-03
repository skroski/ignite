import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

// interface TransactionInput {
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
// }

// type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>




interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);


export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
    const [transactions, setTransactons] = useState<Transaction[]>([])

    useEffect(() => {
        api('transactions')
            .then(response => setTransactons(response.data.transactions)
            )
    }, []);
    async function createTransaction(transactionInput: TransactionInput) {
      const response =  await api.post('transactions', {
          ...transactionInput,
          createdAt: new Date()
      })
      const { transaction } = response.data;
      setTransactons([
          ...transactions,
          transaction,
      ])
    }
    return (
        <TransactionContext.Provider value={{ transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
};

export const useTransactions = () => {
    const context = useContext(TransactionContext);
    return context;
};