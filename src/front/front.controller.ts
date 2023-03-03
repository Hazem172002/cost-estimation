import { Controller, Res, Get } from '@nestjs/common';
import { FrontService } from './front.service';

@Controller('front')
export class FrontController {
  constructor(private frontService: FrontService) {}
  @Get()
  SystemFeatures(@Res() res) {
    return this.frontService.SystemFeatures(res);
  }
}
