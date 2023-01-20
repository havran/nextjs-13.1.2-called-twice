import 'server-only';

import { cache } from 'react';

import DataService from "../data/data.service";

const getData = cache(async (path: string) => {
  const timeLabel = `[${new Date().toISOString()}] fetch getData by path: ${path}`;
  !process.env.BUILD && console.time(timeLabel);
  const res = await DataService.data(path);
  !process.env.BUILD && console.timeEnd(timeLabel);

  return res;
});

export default getData;
