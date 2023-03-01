import { forwardRef, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PlatformsController } from './platforms/platforms.controller';
import { PlatformsModule } from './platforms/platforms.module';
import { TranslatorModule } from 'nestjs-translator';
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
  ],
  controllers: [PlatformsController],
  providers: [PrismaService],
})
export class AppModule {}
