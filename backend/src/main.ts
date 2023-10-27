import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = await app.get(ConfigService);
  const port = config.get<number>('API_PORT');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port, () => {
    console.log(`app start on port ${port}`);
  });
}
bootstrap();
