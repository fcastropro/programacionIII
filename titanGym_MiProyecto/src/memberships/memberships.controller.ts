import {
  Controller, Get, Post, Put, Delete, Body, Param,
  Query, BadRequestException, NotFoundException,
  InternalServerErrorException
} from '@nestjs/common';
import { MembershipsService } from './memberships.service';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Membership } from './membership.entity';

@Controller('memberships')
export class MembershipsController {
  constructor(private readonly service: MembershipsService) {}

  @Post()
  async create(@Body() dto: CreateMembershipDto) {
    const result = await this.service.create(dto);
    if (!result) throw new InternalServerErrorException('Membership creation failed');
    return new SuccessResponseDto('Membership created successfully', result);
  }

  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<SuccessResponseDto<Pagination<Membership>>> {
    const result = await this.service.findAll({ page, limit });
    if (!result) throw new InternalServerErrorException('Could not retrieve data');
    return new SuccessResponseDto('Memberships retrieved successfully', result);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.service.findOne(id);
    if (!result) throw new NotFoundException('Membership not found');
    return new SuccessResponseDto('Membership retrieved successfully', result);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateMembershipDto) {
    const result = await this.service.update(id, dto);
    if (!result) throw new NotFoundException('Membership not found');
    return new SuccessResponseDto('Membership updated successfully', result);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.service.remove(id);
    if (!result) throw new NotFoundException('Membership not found');
    return new SuccessResponseDto('Membership deleted successfully', result);
  }
}