import { Controller, Get } from '@nestjs/common';
import { FunctionalityService } from './functionality.service';

@Controller('functionality')
export class FunctionalityController {
  constructor(private functionalityService: FunctionalityService) {}

  @Get()
  async functionality() {
    return this.functionalityService.functionality();
  }
}
