import {
  Controller, Get, Post, Put, Delete, Body, Param,
  Query, BadRequestException, NotFoundException,
  InternalServerErrorException
} from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Exercise } from './exercise.entity';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly service: ExercisesService) {}

  @Post()
  async create(@Body() dto: CreateExerciseDto) {
    const result = await this.service.create(dto);
    if (!result) throw new InternalServerErrorException('Exercise creation failed');
    return new SuccessResponseDto('Exercise created successfully', result);
  }

  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<SuccessResponseDto<Pagination<Exercise>>> {
    const result = await this.service.findAll({ page, limit });
    if (!result) throw new InternalServerErrorException('Could not retrieve data');
    return new SuccessResponseDto('Exercises retrieved successfully', result);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.service.findOne(id);
    if (!result) throw new NotFoundException('Exercise not found');
    return new SuccessResponseDto('Exercise retrieved successfully', result);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateExerciseDto) {
    const result = await this.service.update(id, dto);
    if (!result) throw new NotFoundException('Exercise not found');
    return new SuccessResponseDto('Exercise updated successfully', result);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.service.remove(id);
    if (!result) throw new NotFoundException('Exercise not found');
    return new SuccessResponseDto('Exercise deleted successfully', result);
  }
}