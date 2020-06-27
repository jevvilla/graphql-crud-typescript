import path from 'path';
import { createConnection } from 'typeorm';

export async function connect() {
  try {
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'graphql-ts',
      entities: [path.join(__dirname, '../database/entity/**/**.ts')],
      synchronize: true,
      logger: 'advanced-console',
    });
    console.info('database connected');
  } catch (error) {
    console.error('database connection error:', error);
  }
}
