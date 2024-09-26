import { BudgetType, TransactionType, User } from './user.model';

export const user1: User = {
  id: 1,
  email: 'john.doe@example.com',
  username: 'johndoe',
  password: 'password123',
  fpToken: 'some_token',
  profile: {
    firstName: 'John',
    lastName: 'Doe',
    phone: '123-456-7890',
    occupation: 'Software Engineer',
    bio: 'Loves coding and solving problems.',
    birthDate: new Date(1990, 1, 20),
    country: 'USA',
    avatar: 'https://example.com/avatars/johndoe.jpg',
  },
  manager: {
    transactions: [
      {
        id: 1,
        type: TransactionType.INCOME,
        name: 'Salary',
        amount: 5000,
        date: '12/01/23',
        accountName: 'TBL Savings Account',
      },
      {
        id: 2,
        type: TransactionType.EXPENSE,
        name: 'Groceries',
        amount: 150,
        date: '12/02/23',
        accountName: 'Checking Account',
      },
      {
        id: 3,
        type: TransactionType.DEPOSIT,
        name: 'Deposit',
        amount: 1000,
        date: '12/03/23',
        accountName: 'Investment Account',
      },
      {
        id: 4,
        type: TransactionType.TRANSFER,
        name: 'Transfer to Friend',
        amount: 200,
        date: '12/04/23',
        accountName: 'TBL Savings Account',
      },
      {
        id: 5,
        type: TransactionType.DEBIT,
        name: 'Debit Card Payment',
        amount: 50,
        date: '12/05/23',
        accountName: 'Checking Account',
      },
      {
        id: 6,
        type: TransactionType.CREDIT,
        name: 'Credit Card Payment',
        amount: 300,
        date: '12/06/23',
        accountName: 'Credit Card Account',
      },
      {
        id: 7,
        type: TransactionType.FEE,
        name: 'Bank Fee',
        amount: 20,
        date: '12/07/23',
        accountName: 'Checking Account',
      },
      {
        id: 8,
        type: TransactionType.REFUND,
        name: 'Refund',
        amount: 75,
        date: '12/08/23',
        accountName: 'TBL Savings Account',
      },
      {
        id: 9,
        type: TransactionType.OTHER,
        name: 'Miscellaneous',
        amount: 100,
        date: '12/09/23',
        accountName: 'Bkash',
      },
      {
        id: 10,
        type: TransactionType.EXPENSE,
        name: 'Dining Out',
        amount: 80,
        date: '12/10/23',
        accountName: 'Bkash',
      },
    ],
    accounts: [
      {
        id: 1,
        name: 'TBL Savings Account',
        balance: 1250.5,
        transactions: [
          {
            id: 1,
            type: TransactionType.DEPOSIT,
            name: 'Paycheck',
            amount: 2000,
            date: '12/10/23',
          },
        ],
      },
      {
        id: 2,
        name: 'TBL DPS Account',
        balance: 35_000,
        transactions: [
          {
            id: 1,
            type: TransactionType.DEPOSIT,
            name: 'DPS deposit',
            amount: 5000,
            date: '15/10/23',
          },
        ],
      },
      {
        id: 3,
        name: 'Bkash',
        balance: 10_000,
        transactions: [
          {
            id: 1,
            type: TransactionType.DEPOSIT,
            name: 'From Abir',
            amount: 5000,
            date: '18/10/23',
          },
        ],
      },
    ],
    budgets: [
      {
        name: 'Grocery shopping',
        amount: 300,
        createdAt: '12/01/23', // December 1, 2023
        budgetType: BudgetType.GROCERIES,
      },
      {
        name: 'Movie tickets',
        amount: 150,
        createdAt: '11/15/23', // November 15, 2023
        budgetType: BudgetType.ENTERTAINMENT,
      },
      {
        name: 'Electricity bill',
        amount: 250,
        createdAt: '12/10/23', // December 10, 2023
        budgetType: BudgetType.UTILITIES,
      },
      {
        name: 'Fuel expenses',
        amount: 200,
        createdAt: '11/25/23', // November 25, 2023
        budgetType: BudgetType.TRANSPORTATION,
      },
      {
        name: 'Dinner at a restaurant',
        amount: 180,
        createdAt: '12/05/23', // December 5, 2023
        budgetType: BudgetType.DINING_OUT,
      },
      {
        name: 'Holiday trip',
        amount: 800,
        createdAt: '12/20/23', // December 20, 2023
        budgetType: BudgetType.TRAVEL_AND_TOUR,
      },
    ],
  },
};
