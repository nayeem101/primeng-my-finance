export interface User {
  email: string;
  username: string;
  password: string;
  fpToken: string;
  id: string | number;
  profile: Profile;
  manager: AccountManager;
}

export interface Profile {
  firstName: string;
  lastName: string;
  phone: string;
  occupation: string;
  bio: string;
  birthDate: Date;
  country: string;
  avatar: string;
}

export interface AccountTransaction extends Transaction {
  accountName: string;
}

export interface AccountManager {
  transactions: AccountTransaction[];
  accounts: Account[];
  budgets: Budget[];
}

export interface Account {
  id: number;
  name: string;
  balance: number;
  transactions: Transaction[];
}

export interface Transaction {
  id: number;
  type: TransactionType;
  name: string;
  amount: number;
  date: string;
}

export interface Budget {
  name: string;
  amount: number;
  createdAt?: string;
  budgetType?: BudgetType;
}

export enum BudgetType {
  GROCERIES = 'Groceries',
  ENTERTAINMENT = 'Entertainment',
  UTILITIES = 'Utilities',
  TRANSPORTATION = 'Transportation',
  DINING_OUT = 'Dining Out',
  TRAVEL_AND_TOUR = 'Travel & Tour',
}

export enum TransactionType {
  INCOME = 'Income',
  EXPENSE = 'Expense',
  DEPOSIT = 'Deposit',
  TRANSFER = 'Transfer',
  DEBIT = 'Debit',
  CREDIT = 'Credit',
  FEE = 'Fee',
  REFUND = 'Refund',
  OTHER = 'Other',
}

export type AccountData = Omit<Account, 'transactions'>;
