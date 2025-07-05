import {
  Controller, Get, Post, Put, Delete, Body, Param,
  Query, BadRequestException, NotFoundException,
  InternalServerErrorException
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Client } from './client.entity';

@Controller('clients')
export class ClientsController {
  constructor(private readonly service: ClientsService) {}

  @Post()
  async create(@Body() dto: CreateClientDto) {
    const result = await this.service.create(dto);
    if (!result) throw new InternalServerErrorException('Client creation failed');
    return new SuccessResponseDto('Client created successfully', result);
  }

  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<SuccessResponseDto<Pagination<Client>>> {
    const result = await this.service.findAll({ page, limit });
    if (!result) throw new InternalServerErrorException('Could not retrieve data');
    return new SuccessResponseDto('Clients retrieved successfully', result);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.service.findOne(id);
    if (!result) throw new NotFoundException('Client not found');
    return new SuccessResponseDto('Client retrieved successfully', result);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateClientDto) {
    const result = await this.service.update(id, dto);
    if (!result) throw new NotFoundException('Client not found');
    return new SuccessResponseDto('Client updated successfully', result);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.service.remove(id);
    if (!result) throw new NotFoundException('Client not found');
    return new SuccessResponseDto('Client deleted successfully', result);
  }
}