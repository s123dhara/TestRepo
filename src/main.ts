import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenv, { config } from 'dotenv';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT ?? 3000;
  await app.listen(PORT);

  console.log({
    host: process.env.DATABASE_HOST || 'localhost',
    port: (process.env.DATABASE_PORT == undefined) ? 5432 : +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || '123',
    database: process.env.DATABASE_NAME || 'crs',
  })

  console.log(`Launching NestJS app on port ${PORT}, URL: http://0.0.0.0:${PORT}`)
}
bootstrap();
