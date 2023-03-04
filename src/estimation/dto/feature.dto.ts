/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString } from 'class-validator';

export class Feature {
  @IsNotEmpty()
  feature: string[];
  @IsNotEmpty()
  @IsString()
  platformId: string;
}
