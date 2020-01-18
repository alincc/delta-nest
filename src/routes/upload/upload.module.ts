import { Module } from "@nestjs/common";
import { UploadController } from "./upload.controller";
import { ServicesModule } from "src/services/services.module";
import { UploadControllerService } from "./upload.service";

@Module({
  imports: [ServicesModule],
  controllers: [UploadController],
  providers: [UploadControllerService]
})
export class UploadModule {}
