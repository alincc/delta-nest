import { Module } from "@nestjs/common";
import { PrincipalControllerService } from "./principal.service";
import { PrincipalController } from "./principal.controller";
import { ServicesModule } from "src/services/services.module";

@Module({
  imports: [ServicesModule],
  providers: [PrincipalControllerService],
  controllers: [PrincipalController]
})
export class PrincipalModule {}
