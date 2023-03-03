import { Injectable } from '@nestjs/common';
import { Cost } from 'src/helper/service/cost.service';
import { Hours } from 'src/helper/service/hours.service';
import { ResponseService } from 'src/helper/service/response.service';
import { PrismaService } from 'src/prisma.service';
import { Estimate } from './dto/estimation.dto';

@Injectable()
export class EstimationService {
  constructor(
    private costService: Cost,
    private hourService: Hours,
    private prisma: PrismaService,
    private responseService: ResponseService,
  ) {}
  async getEstimation(body, res) {
    const { estimate } = body;
    let cost = 0;
    let hours = 0;
    if (typeof estimate === 'string') {
      cost = this.costService.getValue(estimate);
      hours = this.hourService.getValue(estimate);
    } else {
      estimate.map((estimates) => {
        cost += this.costService.getValue(estimates);
      });
      estimate.map((estimates) => {
        hours += this.hourService.getValue(estimates);
      });
    }
    return this.responseService.success(
      res,
      'hours and features  Successfully',
      {
        hours: hours,
        cost: cost,
      },
    );
  }

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
    return {
      landingPage: getallFeatures.Foundations[0].LandingPage,
      settings: getallFeatures.Foundations[0].Settings,
      help: getallFeatures.Foundations[0].Help,
      auth: getallFeatures.Foundations[0].Auth,
      functionality: getallFeatures.Functionalities[0],
    };
  }
  async userFeatures(body, res) {
    const feature = await this.prisma.selects.findMany({
      where: {
        platfromId: body.platformId,
      },
      select: {
        featureName: true,
      },
    });
    if (!feature.length) {
      return this.responseService.forbidden(res, 'no features for this id');
    }
    return this.responseService.success(
      res,
      'hours and features  Successfully',
      feature,
    );
  }
  async addFeature(body, res) {
    const { feature } = body;
    const lastFeatures = [];
    const systemFeatures = [];
    const userFeature = [];
    const rejectedFeatures = [];
    let cost = 0;
    let hours = 0;
    const { landingPage, settings, help, auth, functionality } =
      await this.SystemFeatures();
    const platform = await this.prisma.platforms.create({
      data: {},
    });
    //flat system features
    landingPage.map((feature) => {
      systemFeatures.push(feature.featureName);
    });
    settings.map((feature) => {
      systemFeatures.push(feature.featureName);
    });
    help.map((feature) => {
      systemFeatures.push(feature.featureName);
    });
    auth.map((feature) => {
      systemFeatures.push(feature.featureName);
    });
    Object.keys(functionality).map((feature) => {
      systemFeatures.push(feature);
    });

    //check if userFeature isIn SystemFeatures
    feature.map((a) => {
      let found = false;
      found = systemFeatures.includes(a);
      if (found === true) {
        userFeature.push(a);
      } else {
        rejectedFeatures.push(a);
      }
    });
    if (userFeature.length === 0) {
      return this.responseService.conflict(
        res,
        'be careful all features is not in my db',
        rejectedFeatures,
      );
    }
    //estimate cost and hours
    userFeature.map((a) => {
      cost += this.costService.getValue(a);
      hours += this.hourService.getValue(a);
    });
    for (let i = 0; i < userFeature.length; i++) {
      lastFeatures.push({
        platfromId: platform.id,
        featureName: userFeature[i],
      });
    }
    await this.prisma.selects.createMany({
      data: lastFeatures,
    });
    await this.prisma.estimation.create({
      data: {
        cost: cost,
        hours: hours,
        platfromId: platform.id,
      },
    });
    if (rejectedFeatures.length > 0) {
      return this.responseService.created(
        res,
        'but this features is not in my db',
        rejectedFeatures,
      );
    }
    return this.responseService.success(res, 'Features Added Successfully ');
  }
}
