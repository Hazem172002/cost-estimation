/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { FrontService } from './front.service';
// eslint-disable-next-line prettier/prettier

@Controller('front')
export class FrontController {
  constructor(private frontService: FrontService) {}
  @Get()
  async SystemFeatures() {
    return this.frontService.SystemFeatures();
  }
}
