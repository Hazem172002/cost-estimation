import { Injectable } from '@nestjs/common';
import { Cost } from 'src/helper/service/cost.service';
import { Hours } from 'src/helper/service/hours.service';
import { Estimate } from './dto/estimation.dto';

@Injectable()
export class EstimationService {
  constructor(private costService: Cost, private hourService: Hours) {}
  async getEstimation(body: Estimate) {
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

    return cost + hours;
  }
}
