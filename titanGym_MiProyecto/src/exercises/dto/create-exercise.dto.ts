import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateExerciseDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  muscleGroup?: string;

  @IsOptional()
  @IsNumber()
  repetitions?: number;

  @IsOptional()
  @IsNumber()
  sets?: number;

  @IsOptional()
  @IsNumber()
  durationInMinutes?: number;
}