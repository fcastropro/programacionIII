import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pagination, IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { Membership } from './membership.entity';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';

@Injectable()
export class MembershipsService {
  constructor(
    @InjectRepository(Membership)
    private readonly repo: Repository<Membership>,
  ) {}

  async create(dto: CreateMembershipDto): Promise<Membership | null> {
    try {
      const entity = this.repo.create(dto);
      return await this.repo.save(entity);
    } catch (err) {
      console.error('Error creating memberships:', err);
      return null;
    }
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<Membership> | null> {
    try {
      const query = this.repo.createQueryBuilder('membership');
      return await paginate<Membership>(query, options);
    } catch (err) {
      console.error('Error retrieving memberships:', err);
      return null;
    }
  }

  async findOne(id: string): Promise<Membership | null> {
    try {
      return await this.repo.findOne({ where: { id } });
    } catch (err) {
      console.error('Error finding memberships by ID:', err);
      return null;
    }
  }

  async update(id: string, dto: UpdateMembershipDto): Promise<Membership | null> {
    try {
      const entity = await this.findOne(id);
      if (!entity) return null;
      Object.assign(entity, dto);
      return await this.repo.save(entity);
    } catch (err) {
      console.error('Error updating memberships:', err);
      return null;
    }
  }

  async remove(id: string): Promise<Membership | null> {
    try {
      const entity = await this.findOne(id);
      if (!entity) return null;
      return await this.repo.remove(entity);
    } catch (err) {
      console.error('Error deleting memberships:', err);
      return null;
    }
  }
}