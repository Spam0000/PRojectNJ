import { Controller, Get, Query } from '@nestjs/common';
import { StaticService } from './static.service';

@Controller('static')
export class StaticController {
  constructor(private readonly staticService: StaticService) {}

  @Get('add')
  addNumbers(@Query('a') a: number, @Query('b') b: number): number {
    return this.staticService.addNumbers(a, b);
  }
}