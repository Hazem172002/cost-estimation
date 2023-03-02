import { forwardRef, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PlatformsController } from './platforms/platforms.controller';
import { PlatformsModule } from './platforms/platforms.module';
import { TranslatorModule } from 'nestjs-translator';
import { EstimationController } from './estimation/estimation.controller';
import { EstimationService } from './estimation/estimation.service';
import { EstimationModule } from './estimation/estimation.module';
import { Cost } from './helper/service/cost.service';
import { Hours } from './helper/service/hours.service';
import { PlatformsService } from './platforms/platforms.service';

import { ResponseService } from './helper/service/response.service';

@Module({
  imports: [
    PlatformsModule,
    forwardRef(() =>
      TranslatorModule.forRoot({
        global: true,
        defaultLang: 'en',
        translationSource: './src/i18n',
      }),
    ),
    EstimationModule,
  ],
  controllers: [PlatformsController, EstimationController],
  providers: [
    PrismaService,
    EstimationService,
    PlatformsService,

    Cost,
    Hours,
    ResponseService,
  ],
})
export class AppModule {}
