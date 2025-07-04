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
exports.MembershipsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const membership_entity_1 = require("./membership.entity");
let MembershipsService = class MembershipsService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async create(dto) {
        try {
            const entity = this.repo.create(dto);
            return await this.repo.save(entity);
        }
        catch (err) {
            console.error('Error creating memberships:', err);
            return null;
        }
    }
    async findAll(options) {
        try {
            const query = this.repo.createQueryBuilder('membership');
            return await (0, nestjs_typeorm_paginate_1.paginate)(query, options);
        }
        catch (err) {
            console.error('Error retrieving memberships:', err);
            return null;
        }
    }
    async findOne(id) {
        try {
            return await this.repo.findOne({ where: { id } });
        }
        catch (err) {
            console.error('Error finding memberships by ID:', err);
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
            console.error('Error updating memberships:', err);
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
            console.error('Error deleting memberships:', err);
            return null;
        }
    }
};
exports.MembershipsService = MembershipsService;
exports.MembershipsService = MembershipsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(membership_entity_1.Membership)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MembershipsService);
//# sourceMappingURL=memberships.service.js.map