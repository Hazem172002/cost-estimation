import { Module } from '@nestjs/common';
import { FunctionalityService } from './functionality.service';

@Module({
  providers: [FunctionalityService]
})
export class FunctionalityModule {}
