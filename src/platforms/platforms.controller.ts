import {
  Controller,
  Get,
  Post,
  ValidationPipe,
  Body,
  Res,
} from '@nestjs/common';
import { Platforms } from './dto/platforms.dto';
import { TranslatorService } from 'nestjs-translator';
import { PrismaService } from 'src/prisma.service';
import { PlatformsService } from './platforms.service';

@Controller('platforms')
export class PlatformsController {
  constructor(private platformsService: PlatformsService) {}
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
  @Post()
  addPlatforms(
    @Body(new ValidationPipe({ transform: true })) body: Platforms,
    @Res() res,
  ) {
    return this.platformsService.addPlatforms(body, res);
  }
  @Get()
  async platforms() {
    return this.platformsService.platforms();
  }
  @Get('foundations')
  async foundations() {
    return this.platformsService.foundations();
  }
}
