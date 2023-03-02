import {
  Body,
  Controller,
  Get,
  ValidationPipe,
  Post,
  Res,
} from '@nestjs/common';
import { Estimate } from './dto/estimation.dto';
import { Feature } from './dto/feature.dto';
import { Form } from './dto/form.dto';
import { EstimationService } from './estimation.service';

@Controller('estimation')
export class EstimationController {
  constructor(private estimationService: EstimationService) {}
  @Get()
  getEstimation(
    @Body(new ValidationPipe({ transform: true })) body: Estimate,
    @Res() res,
  ) {
    return this.estimationService.getEstimation(body, res);
  }
  @Post('add-feature')
  addFeature(
    @Body(new ValidationPipe({ transform: true })) body: Feature,
    @Res() res,
  ) {
    return this.estimationService.addFeature(body, res);
  }
}
