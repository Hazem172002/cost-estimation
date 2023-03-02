/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString } from 'class-validator';

export class Foundation {
  @IsNotEmpty()
  foundation: string[];
  @IsNotEmpty()
  @IsString()
  platformId: string;
}
