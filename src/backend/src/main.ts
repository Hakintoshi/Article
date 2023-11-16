import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors();
  const port = +process.env.API_PORT;
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port, () => {
    console.log(`app start on port ${port}`);
  });
  // здесь нужно указать глобальный префикс нест прриложения по которому будут передаваться данные на фрон
}
bootstrap();
