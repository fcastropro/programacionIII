import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pagination, IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { Exercise } from './exercise.entity';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private readonly repo: Repository<Exercise>,
  ) {}

  async create(dto: CreateExerciseDto): Promise<Exercise | null> {
    try {
      const entity = this.repo.create(dto);
      return await this.repo.save(entity);
    } catch (err) {
      console.error('Error creating exercises:', err);
      return null;
    }
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<Exercise> | null> {
    try {
      const query = this.repo.createQueryBuilder('exercise');
      return await paginate<Exercise>(query, options);
    } catch (err) {
      console.error('Error retrieving exercises:', err);
      return null;
    }
  }

  async findOne(id: string): Promise<Exercise | null> {
    try {
      return await this.repo.findOne({ where: { id } });
    } catch (err) {
      console.error('Error finding exercises by ID:', err);
      return null;
    }
  }

  async update(id: string, dto: UpdateExerciseDto): Promise<Exercise | null> {
    try {
      const entity = await this.findOne(id);
      if (!entity) return null;
      Object.assign(entity, dto);
      return await this.repo.save(entity);
    } catch (err) {
      console.error('Error updating exercises:', err);
      return null;
    }
  }

  async remove(id: string): Promise<Exercise | null> {
    try {
      const entity = await this.findOne(id);
      if (!entity) return null;
      return await this.repo.remove(entity);
    } catch (err) {
      console.error('Error deleting exercises:', err);
      return null;
    }
  }
}