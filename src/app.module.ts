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
import { FoundationController } from './foundation/foundation.controller';
import { FoundationModule } from './foundation/foundation.module';
import { FunctionalityController } from './functionality/functionality.controller';
import { FunctionalityModule } from './functionality/functionality.module';
import { ResponseService } from './helper/service/response.service';
import { FoundationService } from './foundation/foundation.service';
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
    FoundationModule,
    FunctionalityModule,
  ],
  controllers: [
    PlatformsController,
    EstimationController,
    FoundationController,
    FunctionalityController,
  ],
  providers: [
    PrismaService,
    EstimationService,
    PlatformsService,
    FoundationService,
    Cost,
    Hours,
    ResponseService,
  ],
})
export class AppModule {}
