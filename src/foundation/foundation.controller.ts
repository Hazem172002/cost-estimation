import { Controller, ValidationPipe, Body, Post } from '@nestjs/common';
import { Foundation } from './dto/foundation.dto';
import { FoundationService } from './foundation.service';

@Controller('foundation')
export class FoundationController {
  constructor(private foundationService: FoundationService) {}
  @Post()
  addFoundations(
    @Body(new ValidationPipe({ transform: true })) body: Foundation,
  ) {
    return this.foundationService.addFoundations(body);
  }
}
