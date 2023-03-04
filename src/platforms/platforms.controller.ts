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
  @Post('add-platform')
  async platforms(
    @Body(new ValidationPipe({ transform: true })) body: Platforms,
    @Res() res,
  ) {
    return this.platformsService.platforms(body, res);
  }
  @Get()
  async getPlatforms(@Res() res) {
    return this.platformsService.getPlatforms(res);
  }
}
