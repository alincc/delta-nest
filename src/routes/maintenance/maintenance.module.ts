import { Module } from "@nestjs/common";
import { MaintenanceController } from "./maintenance.controller";
import { MaintenanceControllerService } from "./maintenance.service";
import { ServicesModule } from "src/services/services.module";

@Module({
  imports: [ServicesModule],
  controllers: [MaintenanceController],
  providers: [MaintenanceControllerService]
})
export class MaintenanceModule {}
