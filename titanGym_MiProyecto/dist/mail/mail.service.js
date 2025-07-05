"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const nodemailer = require("nodemailer");
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let MailService = class MailService {
    async sendMail(dto) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
        try {
            const info = await transporter.sendMail({
                from: process.env.MAIL_USER,
                to: dto.to,
                subject: dto.subject,
                html: dto.message,
            });
            return { messageId: info.messageId };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('No se pudo enviar el correo');
        }
    }
    async fetchUserListFromPublicApi() {
        const res = await axios_1.default.get('https://jsonplaceholder.typicode.com/users');
        return res.data;
    }
    async sendWithSendGrid(dto) {
        const res = await axios_1.default.post('https://api.sendgrid.com/v3/mail/send', {
            personalizations: [{ to: [{ email: dto.to }] }],
            from: { email: process.env.SENDGRID_SENDER },
            subject: dto.subject,
            content: [{ type: 'text/html', value: dto.message }],
        }, {
            headers: {
                Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        return { status: res.status };
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)()
], MailService);
//# sourceMappingURL=mail.service.js.map