import { Injectable } from '@nestjs/common';

@Injectable()
export class StaticService {
  addNumbers(a: any, b: any): number {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA + numB;
    } else {
      return NaN;
    }
  }
}