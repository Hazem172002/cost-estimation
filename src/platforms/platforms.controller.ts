import { Controller, Get } from '@nestjs/common';
import { TranslatorService } from 'nestjs-translator';
import { PrismaService } from 'src/prisma.service';

@Controller('platforms')
export class PlatformsController {
  constructor(
    private prisma: PrismaService,
    private translator: TranslatorService,
  ) {}
  @Get()
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
  }
}
