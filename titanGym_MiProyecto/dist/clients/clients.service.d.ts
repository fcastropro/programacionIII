import { Repository } from 'typeorm';
import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { Client } from './client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientsService {
    private readonly repo;
    constructor(repo: Repository<Client>);
    create(dto: CreateClientDto): Promise<Client | null>;
    findAll(options: IPaginationOptions): Promise<Pagination<Client> | null>;
    findOne(id: string): Promise<Client | null>;
    update(id: string, dto: UpdateClientDto): Promise<Client | null>;
    remove(id: string): Promise<Client | null>;
}
