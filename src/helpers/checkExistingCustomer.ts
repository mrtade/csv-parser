import { stubCustomers } from '../stub/stub-customers.js';
import { Customer as CustomerType } from '../types/customer';
import { Order } from '../types/order';

export const checkExistingCustomer = (item: Order) => {
  const { customerId } = item;
  const customerExists = stubCustomers.findIndex(
    (customer: CustomerType) => customer.customerId === customerId
  );
  return customerExists === -1 ? false : true;
};
