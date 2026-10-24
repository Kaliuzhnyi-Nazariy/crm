export type Order = {
  order: string;
  date: string;
  customer: string;
  payment_status: 'Paid' | 'Pending';
  order_status: 'Ready' | 'Shipped' | 'Received';
  total: number;
};
