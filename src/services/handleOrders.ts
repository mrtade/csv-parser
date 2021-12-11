import { Order } from '../types/order';
import { checkExistingCustomerDB } from './customerServices.js';
import { insertSingleOrder } from './orderServices.js';

export const handleOrdersImport = async (order: Order) => {
  const { customerId: orderCustomerId } = order;
  const isExisitingCustomer = await checkExistingCustomerDB(orderCustomerId);

  if (!isExisitingCustomer) return;
  else {
    insertSingleOrder(order);
    console.log(`> Write customers ${orderCustomerId} order to Database`);
  }
};
