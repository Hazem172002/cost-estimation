import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FoundationService {
  constructor(private prisma: PrismaService) {}
  async addFoundations(body) {
    const { foundation, platformId } = body;
    const finalFoundation = [];
    for (let i = 0; i < foundation.length; i++) {
      finalFoundation.push({
        platfromId: platformId,
        features: foundation[i],
      });
    }
    const createFoundations = await this.prisma.selects.createMany({
      data: finalFoundation,
    });
    return createFoundations;
  }
}
