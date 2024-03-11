import { Module } from '@nestjs/common';
import { DynamicController } from './dynamic/dynamic.controller';
import { DynamicService } from './dynamic/dynamic.service';

@Module({
  controllers: [DynamicController],
  providers: [DynamicService],
})
export class DynamicModule {}