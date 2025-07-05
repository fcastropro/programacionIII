import { Repository } from 'typeorm';
import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { Exercise } from './exercise.entity';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
export declare class ExercisesService {
    private readonly repo;
    constructor(repo: Repository<Exercise>);
    create(dto: CreateExerciseDto): Promise<Exercise | null>;
    findAll(options: IPaginationOptions): Promise<Pagination<Exercise> | null>;
    findOne(id: string): Promise<Exercise | null>;
    update(id: string, dto: UpdateExerciseDto): Promise<Exercise | null>;
    remove(id: string): Promise<Exercise | null>;
}
