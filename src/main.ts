import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DataSource } from 'typeorm';
import { seedReserva } from './reserva/reserva.seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.PORT) || 8081;

  const config = new DocumentBuilder()
    .setTitle('Jornada Milhas')
    .setDescription('Jornada  Milhas API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Run seeds
  const dataSource = app.get(DataSource);
  await seedReserva(dataSource);

  await app.listen(port);
}
bootstrap();
