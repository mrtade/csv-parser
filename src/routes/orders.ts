import { Context, DefaultState, Next } from 'koa';

import Router from '@koa/router';

import {
  getSingleOrder,
  importOrdersFromUrl,
  listAllOrders,
} from '../services/orderServices.js';

const orders = new Router<DefaultState, Context>();

orders.get("/orders-all", async (ctx: Context, next: Next): Promise<void> => {
  ctx.body = await listAllOrders();
  await next();
});

orders.get("/order/:id", async (ctx: Context, next: Next): Promise<void> => {
  const { id } = ctx.params;
  ctx.body = await getSingleOrder(id);
  await next();
});

orders.post(
  "/orders-import",
  async (ctx: Context, next: Next): Promise<void> => {
    let { url } = ctx.request.body;
    ctx.body = await importOrdersFromUrl(url);
    await next();
  }
);

export default orders;
