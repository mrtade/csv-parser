import { Context, DefaultState, Next } from 'koa';

import Router from '@koa/router';

import {
  getSingleCustomer,
  listAllCustomers,
} from '../services/customerServices.js';

const customers = new Router<DefaultState, Context>();

customers.get(
  "/customers-all",
  async (ctx: Context, next: Next): Promise<void> => {
    ctx.body = await listAllCustomers();
    await next();
  }
);

customers.get(
  "/customer/:id",
  async (ctx: Context, next: Next): Promise<void> => {
    const { id } = ctx.params;
    ctx.body = await getSingleCustomer(id);
    await next();
  }
);

export default customers;
