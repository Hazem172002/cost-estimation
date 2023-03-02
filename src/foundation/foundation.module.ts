import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FoundationService } from './foundation.service';

@Module({
  providers: [PrismaService, FoundationService],
})
export class FoundationModule {}
