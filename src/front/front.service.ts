import { Injectable } from '@nestjs/common';
import { TranslatorService } from 'nestjs-translator';
import { ResponseService } from 'src/helper/service/response.service';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FrontService {
  constructor(
    private prisma: PrismaService,
    private responseService: ResponseService,
    private translator: TranslatorService,
  ) {}
  async SystemFeatures(res) {
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
    const arHelp = [];
    const arLandingPage = [];
    const arSettings = [];
    const arAuth = [];
    const arFunctionality = [];
    const functionality = [];

    getallFeatures.Foundations[0].Help.map((feature) => {
      arHelp.push(
        this.translator.translate(feature.featureName, { lang: 'ar' }),
      );
    });
    getallFeatures.Foundations[0].LandingPage.map((feature) => {
      arLandingPage.push(
        this.translator.translate(feature.featureName, { lang: 'ar' }),
      );
    });
    getallFeatures.Foundations[0].Settings.map((feature) => {
      arSettings.push(
        this.translator.translate(feature.featureName, { lang: 'ar' }),
      );
    });
    getallFeatures.Foundations[0].Auth.map((feature) => {
      arAuth.push(
        this.translator.translate(feature.featureName, { lang: 'ar' }),
      );
    });
    Object.keys(getallFeatures.Functionalities[0]).map((feature) => {
      arFunctionality.push(this.translator.translate(feature, { lang: 'ar' }));
    });
    Object.keys(getallFeatures.Functionalities[0]).map((feature) => {
      functionality.push(feature);
    });

    return this.responseService.success(res, 'System Features', {
      landingPage: {
        en: getallFeatures.Foundations[0].LandingPage,
        ar: arLandingPage,
      },
      settings: getallFeatures.Foundations[0].Settings,
      help: {
        en: getallFeatures.Foundations[0].Help,
        ar: arHelp,
      },
      auth: {
        en: getallFeatures.Foundations[0].Auth,
        ar: arAuth,
      },
      functionality: {
        en: functionality,
        ar: arFunctionality,
      },
    });
  }
}
