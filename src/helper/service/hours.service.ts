/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class Points {
  getValue(type: string) {
    switch (type) {
      case 'IOS':
        return 25;
      case 'Meeting':
        return 10;
      case 'SprintReview':
        return 10;
      case 'Bounce':
        return 10;
    }
  }
}
