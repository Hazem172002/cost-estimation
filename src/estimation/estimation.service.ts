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
  async userFeatures(platformId) {
    return await this.prisma.selects.findMany({
      where: {
        platfromId: platformId,
      },
    });
  }
  async addFeature(body, res) {
    const { feature } = body;
    const lastFeatures = [];
    const platform = await this.prisma.platforms.create({
      data: {},
    });
    for (let i = 0; i < feature.length; i++) {
      lastFeatures.push({ platfromId: platform.id, featureName: feature[i] });
    }
    const form = await this.prisma.selects.createMany({
      data: lastFeatures,
    });
    return this.responseService.created(
      res,
      'Features Added Successfully',
      form,
    );
  }
}
