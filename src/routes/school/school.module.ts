import { Module } from "@nestjs/common";
import { SchoolControllerService } from "./school.service";
import { SchoolController } from "./school.controller";

@Module({
  providers: [SchoolControllerService],
  controllers: [SchoolController]
})
export class SchoolModule {}
