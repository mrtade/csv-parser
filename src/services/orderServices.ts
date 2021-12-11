import { parseCsvWithUrl } from '../helpers/handleCsvParse.js';
import Order from '../models/order.js';
import { Order as OrderType } from '../types/order.js';

export const insertSingleOrder = async (order: OrderType) => {
  const { orderId, customerId, item, quantity } = order;
  let pushOrder = new Order({
    orderId: orderId,
    customerId: customerId,
    item: item,
    quantity: quantity,
  });
  return await Order.create(pushOrder);
};

export const listAllOrders = async () => {
  return await Order.find();
};

export const getSingleOrder = async (id: any) => {
  return await Order.findById(id).exec();
};

export const importOrdersFromUrl = async (importUrl: string) => {
  parseCsvWithUrl(importUrl);
};
