"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const client_entity_1 = require("./client.entity");
let ClientsService = class ClientsService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async create(dto) {
        try {
            const { membership, ...rest } = dto;
            const entity = this.repo.create({
                ...rest,
                membership: { id: membership }
            });
            return await this.repo.save(entity);
        }
        catch (err) {
            console.error('Error creating client:', err);
            return null;
        }
    }
    async findAll(options) {
        try {
            const query = this.repo.createQueryBuilder('client');
            return await (0, nestjs_typeorm_paginate_1.paginate)(query, options);
        }
        catch (err) {
            console.error('Error retrieving clients:', err);
            return null;
        }
    }
    async findOne(id) {
        try {
            return await this.repo.findOne({ where: { id } });
        }
        catch (err) {
            console.error('Error finding clients by ID:', err);
            return null;
        }
    }
    async update(id, dto) {
        try {
            const entity = await this.findOne(id);
            if (!entity)
                return null;
            Object.assign(entity, dto);
            return await this.repo.save(entity);
        }
        catch (err) {
            console.error('Error updating clients:', err);
            return null;
        }
    }
    async remove(id) {
        try {
            const entity = await this.findOne(id);
            if (!entity)
                return null;
            return await this.repo.remove(entity);
        }
        catch (err) {
            console.error('Error deleting clients:', err);
            return null;
        }
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(client_entity_1.Client)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClientsService);
//# sourceMappingURL=clients.service.js.map