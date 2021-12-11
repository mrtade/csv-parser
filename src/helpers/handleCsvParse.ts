import parse from 'csv-parse';
import { createReadStream } from 'fs';
import got from 'got';
import { URL } from 'url';

import { handleOrdersImport } from '../services/handleOrders.js';

export const parseCsvWithUrl = (csvUrl: string) => {
  return got
    .stream(csvUrl, { isStream: true })
    .on("error", () => {
      throw new Error("> Seems there is an issue with the Url specified.");
    })
    .pipe(parse({ columns: true }))
    .on("error", () => {
      throw new Error("> Oh oh, is the url pointing to an actual csv.");
    })
    .on("data", data => {
      handleOrdersImport(data);
    })
    .on("end", () => console.log("> Done parsing csv"));
};
