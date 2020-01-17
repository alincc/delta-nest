import { Module } from "@nestjs/common";
import { SubjectController } from "./subject.controller";
import { SubjectControllerService } from "./subject.service";
import { ServicesModule } from "src/services/services.module";

@Module({
  imports: [ServicesModule],
  controllers: [SubjectController],
  providers: [SubjectControllerService]
})
export class SubjectModule {}
