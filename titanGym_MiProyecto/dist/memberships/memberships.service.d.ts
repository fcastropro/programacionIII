import { Repository } from 'typeorm';
import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { Membership } from './membership.entity';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';
export declare class MembershipsService {
    private readonly repo;
    constructor(repo: Repository<Membership>);
    create(dto: CreateMembershipDto): Promise<Membership | null>;
    findAll(options: IPaginationOptions): Promise<Pagination<Membership> | null>;
    findOne(id: string): Promise<Membership | null>;
    update(id: string, dto: UpdateMembershipDto): Promise<Membership | null>;
    remove(id: string): Promise<Membership | null>;
}
