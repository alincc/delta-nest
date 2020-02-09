import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
    cors: {
      origin: "*",
      preflightContinue: true,
      allowedHeaders: [
        "Content-Type",
        "Accept",
        "Authorization",
        "Access-Control-Allow-Origin",
        "origin",
        "Access-Control-Allow-Methods"
      ],
      optionsSuccessStatus: 200
    }
  });

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Accept, Authorization, Access-Control-Allow-Origin, origin, Access-Control-Allow-Methods"
    );
    next();
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
  console.log("app is running on port 3000");

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
