import { Body, Controller, Get, ValidationPipe } from '@nestjs/common';
import { Estimate } from './dto/estimation.dto';
import { EstimationService } from './estimation.service';

@Controller('estimation')
export class EstimationController {
  constructor(private estimationService: EstimationService) {}
  @Get()
  getEstimation(@Body(new ValidationPipe({ transform: true })) body: Estimate) {
    return this.estimationService.getEstimation(body);
  }
}
