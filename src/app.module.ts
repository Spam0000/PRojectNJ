
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamicModule } from './modules/dynamic.module';
import { StaticModule } from './modules/static.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [DynamicModule, StaticModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
