import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    console.log('started')
  } catch (error) {
    console.log("🚀 ~ file: main.ts:10 ~ bootstrap ~ error:", error)
    
  }
 
}
bootstrap();
