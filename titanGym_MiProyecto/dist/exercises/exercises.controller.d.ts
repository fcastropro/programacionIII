import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Exercise } from './exercise.entity';
export declare class ExercisesController {
    private readonly service;
    constructor(service: ExercisesService);
    create(dto: CreateExerciseDto): Promise<SuccessResponseDto<Exercise>>;
    findAll(page?: number, limit?: number): Promise<SuccessResponseDto<Pagination<Exercise>>>;
    findOne(id: string): Promise<SuccessResponseDto<Exercise>>;
    update(id: string, dto: UpdateExerciseDto): Promise<SuccessResponseDto<Exercise>>;
    remove(id: string): Promise<SuccessResponseDto<Exercise>>;
}
