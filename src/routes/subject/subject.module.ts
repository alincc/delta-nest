import { Module } from "@nestjs/common";
import { SubjectController } from "./subject.controller";
import { SubjectControllerService } from "./subject.service";

@Module({
  controllers: [SubjectController],
  providers: [SubjectControllerService]
})
export class SubjectModule {}
