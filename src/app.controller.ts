import { PrismaService } from './prisma.service';
import { Controller, Get } from '@nestjs/common';

@Controller('notification')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getHello() {
    return this.prisma.notification.findMany()
  }
}
