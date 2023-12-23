import { TransactionType, User } from './user.model';

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
        type: TransactionType.EXPENSE,
        name: 'Coffee',
        amount: 5.25,
        accountName: 'Savings Account',
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
          },
        ],
      },
    ],
    budgets: [
      { name: 'Groceries', amount: 300 },
      { name: 'Entertainment', amount: 150 },
    ],
  },
};
