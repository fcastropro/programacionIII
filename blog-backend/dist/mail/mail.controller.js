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
exports.MailController = void 0;
const common_1 = require("@nestjs/common");
const mail_service_1 = require("./mail.service");
const send_mail_dto_1 = require("./dto/send-mail.dto");
const response_dto_1 = require("../common/dto/response.dto");
let MailController = class MailController {
    mailService;
    constructor(mailService) {
        this.mailService = mailService;
    }
    async sendGmail(dto) {
        const result = await this.mailService.sendMail(dto);
        return new response_dto_1.SuccessResponseDto('Correo enviado con Gmail', result);
    }
    async getUsersFromPublicApi() {
        const result = await this.mailService.fetchUserListFromPublicApi();
        return new response_dto_1.SuccessResponseDto('Usuarios obtenidos', result);
    }
    async sendSendGrid(dto) {
        const result = await this.mailService.sendWithSendGrid(dto);
        return new response_dto_1.SuccessResponseDto('Correo enviado con SendGrid', result);
    }
};
exports.MailController = MailController;
__decorate([
    (0, common_1.Post)('gmail'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_mail_dto_1.SendMailDto]),
    __metadata("design:returntype", Promise)
], MailController.prototype, "sendGmail", null);
__decorate([
    (0, common_1.Get)('public-api'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MailController.prototype, "getUsersFromPublicApi", null);
__decorate([
    (0, common_1.Post)('sendgrid'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_mail_dto_1.SendMailDto]),
    __metadata("design:returntype", Promise)
], MailController.prototype, "sendSendGrid", null);
exports.MailController = MailController = __decorate([
    (0, common_1.Controller)('mail'),
    __metadata("design:paramtypes", [mail_service_1.MailService])
], MailController);
//# sourceMappingURL=mail.controller.js.map