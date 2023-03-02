import { Module } from '@nestjs/common';
import { Cost } from 'src/helper/service/cost.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PrismaService, Cost],
})
export class PlatformsModule {}
