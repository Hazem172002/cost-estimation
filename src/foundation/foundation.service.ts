/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { TranslatorService } from 'nestjs-translator';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FoundationService {
  constructor(
    private prisma: PrismaService,
    private translator: TranslatorService,
  ) {}
  async foundations() {
    const foundations = await this.prisma.foundations.findFirstOrThrow({
      include: {
        Auth: {
          select: {
            learnMore: true,
            contactUs: true,
            FAQ: true,
            report: true,
          },
        },
        LandingPage: {
          select: {
            dashboard: true,
            navigationTabs: true,
          },
        },
        Settings: {
          select: {
            notifications: true,
            nightMode: true,
          },
        },
        Help: {
          select: {
            learnMore: true,
            contactUs: true,
            FAQ: true,
            report: true,
          },
        },
      },
    });

    const auth = Object.keys(foundations.Auth[0]);
    const landingPage = Object.keys(foundations.LandingPage[0]);
    const settings = Object.keys(foundations.Settings[0]);
    const help = Object.keys(foundations.Help[0]);

    let words: string[];
    // eslint-disable-next-line prefer-const
    words = [
      'LandingPage',
      'Auth',
      'Settings',
      'Help',
      'learnMore',
      'contactUs',
      'FAQ',
      'report',
      'dashboard',
      'navigationTabs',
      'notifications',
      'nightMode',
    ];
    // let i;
    // for (; i < words.length; i++) {
    //   return i;
    // }

    const trans = words.map((word) =>
      this.translator.translate(word, { lang: 'ar' }),
    );

    console.log(auth, landingPage, settings, help, trans);
  }
}
