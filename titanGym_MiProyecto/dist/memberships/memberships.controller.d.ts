import { MembershipsService } from './memberships.service';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Membership } from './membership.entity';
export declare class MembershipsController {
    private readonly service;
    constructor(service: MembershipsService);
    create(dto: CreateMembershipDto): Promise<SuccessResponseDto<Membership>>;
    findAll(page?: number, limit?: number): Promise<SuccessResponseDto<Pagination<Membership>>>;
    findOne(id: string): Promise<SuccessResponseDto<Membership>>;
    update(id: string, dto: UpdateMembershipDto): Promise<SuccessResponseDto<Membership>>;
    remove(id: string): Promise<SuccessResponseDto<Membership>>;
}
