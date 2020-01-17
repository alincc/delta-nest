import { Module } from "@nestjs/common";
import { SchoolControllerService } from "./school.service";
import { SchoolController } from "./school.controller";
import { ServicesModule } from "src/services/services.module";

@Module({
  imports: [ServicesModule],
  providers: [SchoolControllerService],
  controllers: [SchoolController]
})
export class SchoolModule {}
