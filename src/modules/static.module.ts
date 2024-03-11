import { Module } from '@nestjs/common';
import { StaticController } from './static/static.controller';
import { StaticService } from './static/static.service';

@Module({
  controllers: [StaticController],
  providers: [StaticService],
})
export class StaticModule {}