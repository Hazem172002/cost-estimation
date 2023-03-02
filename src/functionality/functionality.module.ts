import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FunctionalityService } from './functionality.service';

@Module({
  providers: [PrismaService, FunctionalityService],
})
export class FunctionalityModule {}
