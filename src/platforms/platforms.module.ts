import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PlatformsService } from './platforms.service';

@Module({
  providers: [PlatformsService, PrismaService],
})
export class PlatformsModule {}
