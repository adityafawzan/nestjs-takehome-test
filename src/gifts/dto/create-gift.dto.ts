import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGiftDto {
  @IsNotEmpty()
  @IsString()
  giftName: string;

  @IsNotEmpty()
  @IsNumber()
  giftRating: number;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;
}
