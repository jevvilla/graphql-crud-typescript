import 'reflect-metadata';
import { startServer } from './app';

import { connect } from './config/typeorm';

async function main() {
  connect();
  const app = await startServer();
  app.listen(3000, (e) => {
    console.log('server on port: 3000');
  });
}

main();
