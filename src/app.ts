import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import json from 'koa-json';
import logger from 'koa-logger';

import cors from '@koa/cors';

import { parseCsvWithUrl } from './helpers/handleCsvParse.js';
import Customer from './models/customer.js';
import customers from './routes/customers.js';
import orders from './routes/orders.js';
import { checkExistingCustomerDB } from './services/customerServices.js';
import { connectDB } from './services/database.js';
import { stubCustomers } from './stub/stub-customers.js';
import { Customer as CustomerType } from './types/customer';

try {
  await connectDB();
} catch (error) {
  console.log("> Error", error);
}

const port: number = parseInt(<string>process.env.PORT, 10) || 9002;

const { CORS_ORIGIN: corsOrigin, CORS_METHODS: corAllowedMethods } =
  process.env;

const app = new Koa();

app.use(
  cors({
    origin: corsOrigin,
    allowMethods: corAllowedMethods,
  })
);

app.use(bodyparser());
app.use(json());
app.use(logger());

app.use(orders.routes()).use(orders.allowedMethods());
app.use(customers.routes()).use(orders.allowedMethods());

app.listen(port, () => {
  console.log(`> Server running on http://localhost:${port}`);
});
