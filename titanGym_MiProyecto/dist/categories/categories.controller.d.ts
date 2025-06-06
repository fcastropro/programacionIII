import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Category } from './category.entity';
import { SuccessResponseDto } from 'src/common/dto/response.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(dto: CreateCategoryDto): Promise<SuccessResponseDto<Category>>;
    findAll(page?: number, limit?: number): Promise<SuccessResponseDto<Pagination<Category>>>;
    findOne(id: string): Promise<SuccessResponseDto<Category>>;
    update(id: string, dto: UpdateCategoryDto): Promise<SuccessResponseDto<Category>>;
    remove(id: string): Promise<SuccessResponseDto<Category>>;
}
