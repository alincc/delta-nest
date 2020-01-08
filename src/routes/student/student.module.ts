import { Module } from "@nestjs/common";
import { StudentController } from "./student.controller";
import { StudentControllerService } from "./student.service";

@Module({
  controllers: [StudentController],
  providers: [StudentControllerService]
})
export class StudentModule {}
