import { Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    create(dto: CreateUserDto): Promise<User | null>;
    findAll(options: IPaginationOptions, isActive?: boolean): Promise<Pagination<User> | null>;
    findOne(id: string): Promise<User | null>;
    findByUsername(username: string): Promise<User | null>;
    update(id: string, dto: UpdateUserDto): Promise<User | null>;
    remove(id: string): Promise<User | null>;
    updateProfile(id: string, filename: string): Promise<User | null>;
}
