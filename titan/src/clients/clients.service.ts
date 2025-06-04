import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pagination, IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { Client } from './client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Membership } from '../memberships/membership.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly repo: Repository<Client>,
  ) {}

  async create(dto: CreateClientDto): Promise<Client | null> {
    try {
      const { membership, ...rest } = dto;

      const entity = this.repo.create({
        ...rest,
        membership: { id: membership } as Membership // <- la clave aquí
      });

      return await this.repo.save(entity);
    } catch (err) {
      console.error('Error creating client:', err);
      return null;
    }
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<Client> | null> {
    try {
      const query = this.repo.createQueryBuilder('client');
      return await paginate<Client>(query, options);
    } catch (err) {
      console.error('Error retrieving clients:', err);
      return null;
    }
  }

  async findOne(id: string): Promise<Client | null> {
    try {
      return await this.repo.findOne({ where: { id } });
    } catch (err) {
      console.error('Error finding clients by ID:', err);
      return null;
    }
  }

  async update(id: string, dto: UpdateClientDto): Promise<Client | null> {
    try {
      const entity = await this.findOne(id);
      if (!entity) return null;
      Object.assign(entity, dto);
      return await this.repo.save(entity);
    } catch (err) {
      console.error('Error updating clients:', err);
      return null;
    }
  }

  async remove(id: string): Promise<Client | null> {
    try {
      const entity = await this.findOne(id);
      if (!entity) return null;
      return await this.repo.remove(entity);
    } catch (err) {
      console.error('Error deleting clients:', err);
      return null;
    }
  }
}