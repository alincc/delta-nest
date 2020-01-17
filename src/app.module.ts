import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { ServicesModule } from "./services/services.module";
import { RoutesModule } from "./routes/routes.module";

@Module({
  imports: [AuthModule, RoutesModule, ServicesModule],
  controllers: []
})
export class AppModule {}
