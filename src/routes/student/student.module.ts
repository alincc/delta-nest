import { Module } from "@nestjs/common";
import { StudentController } from "./student.controller";
import { StudentControllerService } from "./student.service";
import { ServicesModule } from "src/services/services.module";

@Module({
  imports: [ServicesModule],
  controllers: [StudentController],
  providers: [StudentControllerService]
})
export class StudentModule {}
