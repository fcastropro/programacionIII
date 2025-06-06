import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMembershipDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  durationInDays: number;

  @IsOptional()
  @IsString()
  description?: string;
}