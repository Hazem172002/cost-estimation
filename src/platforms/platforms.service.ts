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
  async foundations() {
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
  }

  async addPlatforms(body, res) {
    let { platform } = body;
    let postPlatform = null;
    if (typeof platform === 'string') {
      postPlatform = await this.createPlatform(platform);
      if (postPlatform === null) {
        console.log('not he');
        return this.responseService.custom(
          res,
          400,
          'validation error',
          "Be careful this Platform isn't in my db",
        );
      } else {
        console.log(postPlatform);
        console.log('here');
        return this.responseService.created(
          res,
          'Platform Added Successfully',
          { userId: postPlatform.id },
        );
      }
    } else {
      platform = [...new Set(platform)];
      if (platform.length === 4) {
        postPlatform = await this.prisma.platforms.create({
          data: {
            IOS: true,
            desktop: true,
            android: true,
            web: true,
          },
        });
        return this.responseService.created(
          res,
          'Platform Added Successfully',
          { userId: postPlatform.id },
        );
      } else {
        postPlatform = await this.createPlatform(platform[0]);
        for (let i = 1; i < postPlatform.length; i++) {
          await this.updatePlatform(postPlatform, platform[i]);
        }
        return this.responseService.created(
          res,
          'Platform Added Successfully',
          { userId: postPlatform },
        );
      }
    }
  }
  async updatePlatform(id, platform) {
    let updatePlatform = null;
    if (platform === 'IOS') {
      updatePlatform = await this.prisma.platforms.update({
        where: {
          id: id,
        },
        data: {
          IOS: true,
        },
      });
    } else if (platform === 'Desktop') {
      updatePlatform = await this.prisma.platforms.update({
        where: {
          id: id,
        },
        data: {
          desktop: true,
        },
      });
    } else if (platform === 'Android') {
      updatePlatform = await this.prisma.platforms.update({
        where: {
          id: id,
        },
        data: {
          android: true,
        },
      });
    } else if (platform === 'Web') {
      updatePlatform = await this.prisma.platforms.update({
        where: {
          id: id,
        },
        data: {
          web: true,
        },
      });
    }
    return updatePlatform;
  }
  async createPlatform(platfrom) {
    let postPlatform = null;
    if (platfrom === 'IOS') {
      postPlatform = await this.prisma.platforms.create({
        data: {
          IOS: true,
        },
      });
    } else if (platfrom === 'Android') {
      postPlatform = await this.prisma.platforms.create({
        data: {
          android: true,
        },
      });
    } else if (platfrom === 'Desktop') {
      postPlatform = await this.prisma.platforms.create({
        data: {
          desktop: true,
        },
      });
    } else if (platfrom === 'web') {
      postPlatform = await this.prisma.platforms.create({
        data: {
          web: true,
        },
      });
    }
    return postPlatform.id;
  }
}
