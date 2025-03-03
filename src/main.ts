import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from "@nestjs/config"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: configService.get<String>("CORS_ORIGIN")?.split(","), // Permitir solo solicitudes de este origen
  });

  const port = 3001; // Define el puerto
  await app.listen(port); 
  console.log(`Aplicación corriendo en http://localhost:${port}`);
}
bootstrap();
