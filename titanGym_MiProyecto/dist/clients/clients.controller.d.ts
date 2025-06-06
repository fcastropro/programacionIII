import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Client } from './client.entity';
export declare class ClientsController {
    private readonly service;
    constructor(service: ClientsService);
    create(dto: CreateClientDto): Promise<SuccessResponseDto<Client>>;
    findAll(page?: number, limit?: number): Promise<SuccessResponseDto<Pagination<Client>>>;
    findOne(id: string): Promise<SuccessResponseDto<Client>>;
    update(id: string, dto: UpdateClientDto): Promise<SuccessResponseDto<Client>>;
    remove(id: string): Promise<SuccessResponseDto<Client>>;
}
