import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    const now = Date.now();
    const formattedDate = new Date(now).toLocaleString();
    const { method, url } = req;
    this.logger.log(`[${formattedDate}] ${method} ${url}`);
    next();
  }
}