import { Injectable } from '@nestjs/common';
import { TranslatorService } from 'nestjs-translator';
import { Cost } from 'src/helper/service/cost.service';
import { ResponseService } from 'src/helper/service/response.service';
import { PrismaService } from 'src/prisma.service';
import { Platforms } from './dto/platforms.dto';

@Injectable()
export class PlatformsService {
  constructor(
    private prisma: PrismaService,
    private translator: TranslatorService,
    private responseService: ResponseService,
    private costService: Cost,
  ) {}
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
  /* async foundations() {
    const foundations = await this.prisma.foundations.findFirstOrThrow({
      include: {
        Auth: {
          select: {
            learnMore: true,
            contactUs: true,
            FAQ: true,
            report: true,
          },
        },
        LandingPage: {
          select: {
            dashboard: true,
            navigationTabs: true,
          },
        },
        Settings: {
          select: {
            notifications: true,
            nightMode: true,
          },
        },
        Help: {
          select: {
            learnMore: true,
            contactUs: true,
            FAQ: true,
            report: true,
          },
        },
      },
    });
    const auth = Object.keys(foundations.Auth[0]);
    const landingPage = Object.keys(foundations.LandingPage[0]);
    const settings = Object.keys(foundations.Settings[0]);
    const help = Object.keys(foundations.Help[0]);

    const trans = this.translator.translate('welcome', {
      lang: 'ar',
    });

    console.log(auth, landingPage, settings, help, trans);
  }*/
}
