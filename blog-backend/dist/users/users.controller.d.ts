import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { User } from './user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(dto: CreateUserDto): Promise<SuccessResponseDto<User | null>>;
    findAll(page?: number, limit?: number, isActive?: string): Promise<SuccessResponseDto<Pagination<User>>>;
    findOne(id: string): Promise<SuccessResponseDto<User>>;
    update(id: string, dto: UpdateUserDto): Promise<SuccessResponseDto<User>>;
    remove(id: string): Promise<SuccessResponseDto<User>>;
    uploadProfile(id: string, file: Express.Multer.File): Promise<SuccessResponseDto<User>>;
}
