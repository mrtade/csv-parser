import Customer from '../models/customer.js';

export const checkExistingCustomerDB = async (customerId: string) => {
  return await Customer.findOne({
    customerId: customerId,
  }).exec();
};

export const listAllCustomers = async () => {
  return await Customer.find();
};

export const getSingleCustomer = async (id: any) => {
  return await Customer.findById(id).exec();
};
