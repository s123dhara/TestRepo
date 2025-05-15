import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 4000
  await app.listen(process.env.PORT ?? 3000);

  console.log(`Launching NestJS app on port ${PORT}, URL: http://0.0.0.0:${PORT}`)
}
bootstrap();
