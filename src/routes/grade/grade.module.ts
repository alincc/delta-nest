import { Module } from "@nestjs/common";
import { GradeControllerService } from "./grade.service";
import { GradeController } from "./grade.controller";
import { ServicesModule } from "src/services/services.module";

@Module({
  imports: [ServicesModule],
  providers: [GradeControllerService],
  controllers: [GradeController]
})
export class GradeModule {}
