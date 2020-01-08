import { Module } from "@nestjs/common";
import { PrincipalControllerService } from "./principal.service";
import { PrincipalController } from "./principal.controller";

@Module({
  providers: [PrincipalControllerService],
  controllers: [PrincipalController]
})
export class PrincipalModule {}
