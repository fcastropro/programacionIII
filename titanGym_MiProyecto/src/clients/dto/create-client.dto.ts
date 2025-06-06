import { IsString, IsEmail, IsDateString, IsUUID } from 'class-validator';

export class CreateClientDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsUUID()
  membership: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;
}