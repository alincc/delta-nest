import { Module } from "@nestjs/common";
import { ProgramController } from "./program.controller";
import { ProgramControllerService } from "./program.service";
import { ServicesModule } from "src/services/services.module";

@Module({
  imports: [ServicesModule],
  controllers: [ProgramController],
  providers: [ProgramControllerService]
})
export class ProgramModule {}
