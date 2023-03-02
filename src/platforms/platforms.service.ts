import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlatformsService {
  constructor(private prisma: PrismaService) {}
  /*@Get()
  async find() {
    const v = await this.prisma.platforms.findFirstOrThrow({});
    console.log(v);
    const keys = Object.keys(v);
    console.log(keys);
    return 'fsd';
  }

  @Get('l')
  lan() {
    return this.translator.translate('welcome', {
      lang: 'ar',
    });
  }*/

  async platforms() {
    const platforms = await this.prisma.platforms.findFirstOrThrow({
      select: {
        IOS: true,
        android: true,
        web: true,
        desktop: true,
      },
    });
    const keys = Object.keys(platforms);
    console.log(keys);
  }
}
