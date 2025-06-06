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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const user_entity_1 = require("./user.entity");
let UsersService = class UsersService {
    userRepo;
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async create(dto) {
        try {
            const user = this.userRepo.create(dto);
            return await this.userRepo.save(user);
        }
        catch (err) {
            console.error('Error creating user:', err);
            return null;
        }
    }
    async findAll(options, isActive) {
        try {
            const query = this.userRepo.createQueryBuilder('user');
            if (isActive !== undefined) {
                query.where('user.isActive = :isActive', { isActive });
            }
            return await (0, nestjs_typeorm_paginate_1.paginate)(query, options);
        }
        catch (err) {
            console.error('Error retrieving users:', err);
            return null;
        }
    }
    async findOne(id) {
        try {
            return await this.userRepo.findOne({ where: { id } });
        }
        catch (err) {
            console.error('Error finding user:', err);
            return null;
        }
    }
    async findByUsername(username) {
        try {
            return await this.userRepo.findOne({ where: { username } });
        }
        catch (err) {
            console.error('Error finding user by username:', err);
            return null;
        }
    }
    async update(id, dto) {
        try {
            const user = await this.findOne(id);
            if (!user)
                return null;
            Object.assign(user, dto);
            return await this.userRepo.save(user);
        }
        catch (err) {
            console.error('Error updating user:', err);
            return null;
        }
    }
    async remove(id) {
        try {
            const user = await this.findOne(id);
            if (!user)
                return null;
            return await this.userRepo.remove(user);
        }
        catch (err) {
            console.error('Error deleting user:', err);
            return null;
        }
    }
    async updateProfile(id, filename) {
        try {
            const user = await this.findOne(id);
            if (!user)
                return null;
            user.profile = filename;
            return await this.userRepo.save(user);
        }
        catch (err) {
            console.error('Error updating user profile image:', err);
            return null;
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map