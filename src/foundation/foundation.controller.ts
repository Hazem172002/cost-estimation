import { Controller, Get } from '@nestjs/common';
import { FoundationService } from './foundation.service';

@Controller('foundation')
export class FoundationController {
  constructor(private foundationService: FoundationService) {}

  @Get()
  async foundations() {
    return this.foundationService.foundations();
  }
}
