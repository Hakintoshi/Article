"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const app_module_1 = require("./app/app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const config = await app.get(config_1.ConfigService);
    const port = config.get('API_PORT');
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(port, () => {
        console.log(`app start on port ${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map