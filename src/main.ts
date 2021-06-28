import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(process.env.NODE_PORT || 6868);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
