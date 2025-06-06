"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    app.useGlobalFilters(new http_exception_filter_1.GlobalHttpExceptionFilter());
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map