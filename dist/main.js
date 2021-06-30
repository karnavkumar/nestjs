"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const helmet = require("helmet");
const morgan = require("morgan");
const all_exceptions_filter_1 = require("./all-exceptions.filter");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        bodyParser: true,
    });
    app.use(helmet());
    app.use(morgan('dev'));
    app.setGlobalPrefix('api');
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle(`${process.env.DATABASE || 'NestJS'} API`)
        .setDescription(`The ${process.env.DATABASE || 'NestJS'} API description`)
        .setVersion('1.0.0')
        .addTag(`${process.env.DATABASE || 'NestJS'} API`)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new all_exceptions_filter_1.AllExceptionsFilter(httpAdapter));
    await app.listen(process.env.NODE_PORT || 6868);
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map