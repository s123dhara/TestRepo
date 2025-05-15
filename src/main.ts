import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenv, { config } from 'dotenv';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT ?? 3000;
  await app.listen(PORT);

  console.log(`Launching NestJS app on port ${PORT}, URL: http://0.0.0.0:${PORT}`)
}
bootstrap();
