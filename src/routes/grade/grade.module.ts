import { Module } from "@nestjs/common";
import { GradeControllerService } from "./grade.service";
import { GradeController } from "./grade.controller";

@Module({
  providers: [GradeControllerService],
  controllers: [GradeController]
})
export class GradeModule {}
