import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { Client } from './client.entity';
import { Membership } from '../memberships/membership.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client, Membership])],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}