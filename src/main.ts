import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bodyParser: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.use(morgan('dev'));
  app.setGlobalPrefix('api');
  app.use(helmet());
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle(`${process.env.DATABASE || 'NestJS'} API`)
    .setDescription(`The ${process.env.DATABASE || 'NestJS'} API description`)
    .setVersion('1.0.0')
    .addTag(`${process.env.DATABASE || 'NestJS'} API`)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.NODE_PORT || 6868);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
