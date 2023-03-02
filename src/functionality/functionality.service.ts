import { Injectable } from '@nestjs/common';
import { TranslatorService } from 'nestjs-translator';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FunctionalityService {
  constructor(
    private prisma: PrismaService,
    private translator: TranslatorService,
  ) {}
  async functionality() {
    const functionality = await this.prisma.functionalities.findFirstOrThrow({
      select: {
        learningManagmentSystem: true,
        jopHub: true,
        workPlace: true,
        ODCManagment: true,
      },
    });
    let words: string[];
    // eslint-disable-next-line prefer-const
    words = ['learningManagmentSystem', 'jopHub', 'workPlace', 'ODCManagment'];
    const trans = words.map((word) =>
      this.translator.translate(word, { lang: 'ar' }),
    );
    const keys = Object.keys(functionality);
    console.log(keys, trans);
  }
}
