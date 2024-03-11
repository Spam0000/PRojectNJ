import { Injectable } from '@nestjs/common';

@Injectable()
export class DynamicService {
  generateMessage(name: string, age: number): string {
    return `Salut, ${name}! Tu as ${age} ans.`;
  }
}