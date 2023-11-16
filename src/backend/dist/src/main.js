"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./modules/app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/v1');
    app.enableCors();
    const port = +process.env.API_PORT;
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(port, () => {
        console.log(`app start on port ${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map