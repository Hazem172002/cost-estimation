/* eslint-disable prettier/prettier */
import { PrismaService } from 'src/prisma.service';
import { TranslatorService } from 'nestjs-translator';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FrontService {
  constructor(
    private prisma: PrismaService,
    private translator: TranslatorService,
  ) {}
  async SystemFeatures() {
    const getallFeatures = await this.prisma.platforms.findFirst({
      where: {
        front: true,
      },
      include: {
        Foundations: {
          include: {
            LandingPage: {
              select: {
                featureName: true,
              },
            },
            Settings: {
              select: {
                featureName: true,
              },
            },
            Help: {
              select: {
                featureName: true,
              },
            },
            Auth: {
              select: {
                featureName: true,
              },
            },
          },
        },
        Functionalities: {
          include: {
            LearningManagmentSystem: {
              select: {
                featureName: true,
              },
            },
            WorkPlace: {
              select: {
                featureName: true,
              },
            },
            ODCManagment: {
              select: {
                featureName: true,
              },
            },
            jopHub: {
              select: {
                featureName: true,
              },
            },
          },
        },
      },
    });
    let words: string[];
    // eslint-disable-next-line prefer-const
    words = [
      'LandingPage',
      'Auth',
      'Settings',
      'Help',
      'learnMore',
      'contactUs',
      'FAQ',
      'report',
      'dashboard',
      'navigationTabs',
      'notifications',
      'nightMode',
      'learningManagmentSystem',
      'workPlace',
      'ODCManagment',
      'jopHub',
    ];
    const trans = words.map((word) =>
      this.translator.translate(word, { lang: 'ar' }),
    );
    return {
      trans,
      landingPage: getallFeatures.Foundations[0].LandingPage,
      settings: getallFeatures.Foundations[0].Settings,
      help: getallFeatures.Foundations[0].Help,
      auth: getallFeatures.Foundations[0].Auth,
      functionality: getallFeatures.Functionalities[0],
    };
  }
}
