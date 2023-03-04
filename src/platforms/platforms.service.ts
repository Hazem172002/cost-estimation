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
  async getPlatforms(res) {
    const platforms = await this.prisma.platforms.findFirst({
      where: {
        front: true,
      },
      select: {
        IOS: true,
        android: true,
        web: true,
        desktop: true,
      },
    });
    return this.responseService.success(res, 'Platforms', {
      platforms: Object.keys(platforms),
    });
  }
  async platforms(body, res) {
    let { platform } = body;
    let userPlatform = null;

    if (typeof platform === 'string') {
      if (platform === 'IOS') {
        userPlatform = await this.prisma.platforms.create({
          data: {
            IOS: true,
          },
        });
      } else if (platform === 'Android') {
        userPlatform = await this.prisma.platforms.create({
          data: {
            IOS: true,
          },
        });
      } else if (platform === 'Web') {
        userPlatform = await this.prisma.platforms.create({
          data: {
            IOS: true,
          },
        });
      } else if (platform === 'Desktop') {
        userPlatform = await this.prisma.platforms.create({
          data: {
            IOS: true,
          },
        });
      } else {
        return this.responseService.badRequest(
          res,
          'this platform is not in my db',
          platform,
        );
      }
      return this.responseService.created(
        res,
        'user Platform added Successfully',
        { userId: userPlatform.id },
      );
    } else {
      platform = [...new Set(platform)];
      if (platform.length === 4) {
        const userPlatform = await this.prisma.platforms.create({
          data: {
            IOS: true,
            desktop: true,
            android: true,
            web: true,
          },
        });
        return this.responseService.created(
          res,
          'user Platform added Successfully',
          { userId: userPlatform.id },
        );
      } else if (platform.length === 3) {
        let found = platform.includes('IOS');
        if (!found) {
          userPlatform = await this.prisma.platforms.create({
            data: {
              web: true,
              android: true,
              desktop: true,
            },
          });
          return this.responseService.created(
            res,
            'user Platform added Successfully',
            { userId: userPlatform.id },
          );
        }
        found = platform.includes('Android');
        if (!found) {
          userPlatform = await this.prisma.platforms.create({
            data: {
              web: true,
              IOS: true,
              desktop: true,
            },
          });
          return this.responseService.created(
            res,
            'user Platform added Successfully',
            { userId: userPlatform.id },
          );
        }
        found = platform.includes('Web');
        if (!found) {
          userPlatform = await this.prisma.platforms.create({
            data: {
              android: true,
              IOS: true,
              desktop: true,
            },
          });
          return this.responseService.created(
            res,
            'user Platform added Successfully',
            { userId: userPlatform.id },
          );
        }
        found = platform.includes('Desktop');
        if (!found) {
          userPlatform = await this.prisma.platforms.create({
            data: {
              web: true,
              IOS: true,
              android: true,
            },
          });
          return this.responseService.created(
            res,
            'user Platform added Successfully',
            { userId: userPlatform.id },
          );
        }
      } else if (platform.length === 2) {
        if (platform.includes('Android')) {
          if (platform.includes('Web'))
            userPlatform = await this.prisma.platforms.create({
              data: {
                web: true,
                android: true,
              },
            });
          return this.responseService.created(
            res,
            'user Platform added Successfully',
            { userId: userPlatform.id },
          );
        } else if (platform.includes('Desktop')) {
          userPlatform = await this.prisma.platforms.create({
            data: {
              desktop: true,
              android: true,
            },
          });
          return this.responseService.created(
            res,
            'user Platform added Successfully',
            { userId: userPlatform.id },
          );
        } else if (platform.includes('IOS')) {
          userPlatform = await this.prisma.platforms.create({
            data: {
              IOS: true,
              android: true,
            },
          });
          return this.responseService.created(
            res,
            'user Platform added Successfully',
            { userId: userPlatform.id },
          );
        }
      }
    }
  }
}
