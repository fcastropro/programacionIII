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
exports.ExercisesController = void 0;
const common_1 = require("@nestjs/common");
const exercises_service_1 = require("./exercises.service");
const create_exercise_dto_1 = require("./dto/create-exercise.dto");
const update_exercise_dto_1 = require("./dto/update-exercise.dto");
const response_dto_1 = require("../common/dto/response.dto");
let ExercisesController = class ExercisesController {
    service;
    constructor(service) {
        this.service = service;
    }
    async create(dto) {
        const result = await this.service.create(dto);
        if (!result)
            throw new common_1.InternalServerErrorException('Exercise creation failed');
        return new response_dto_1.SuccessResponseDto('Exercise created successfully', result);
    }
    async findAll(page = 1, limit = 10) {
        const result = await this.service.findAll({ page, limit });
        if (!result)
            throw new common_1.InternalServerErrorException('Could not retrieve data');
        return new response_dto_1.SuccessResponseDto('Exercises retrieved successfully', result);
    }
    async findOne(id) {
        const result = await this.service.findOne(id);
        if (!result)
            throw new common_1.NotFoundException('Exercise not found');
        return new response_dto_1.SuccessResponseDto('Exercise retrieved successfully', result);
    }
    async update(id, dto) {
        const result = await this.service.update(id, dto);
        if (!result)
            throw new common_1.NotFoundException('Exercise not found');
        return new response_dto_1.SuccessResponseDto('Exercise updated successfully', result);
    }
    async remove(id) {
        const result = await this.service.remove(id);
        if (!result)
            throw new common_1.NotFoundException('Exercise not found');
        return new response_dto_1.SuccessResponseDto('Exercise deleted successfully', result);
    }
};
exports.ExercisesController = ExercisesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_exercise_dto_1.CreateExerciseDto]),
    __metadata("design:returntype", Promise)
], ExercisesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ExercisesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExercisesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_exercise_dto_1.UpdateExerciseDto]),
    __metadata("design:returntype", Promise)
], ExercisesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExercisesController.prototype, "remove", null);
exports.ExercisesController = ExercisesController = __decorate([
    (0, common_1.Controller)('exercises'),
    __metadata("design:paramtypes", [exercises_service_1.ExercisesService])
], ExercisesController);
//# sourceMappingURL=exercises.controller.js.map