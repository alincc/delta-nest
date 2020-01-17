import { Module } from "@nestjs/common";
import { FlightController } from "./flight.controller";
import { FlightControllerService } from "./flight.service";
import { ServicesModule } from "src/services/services.module";

@Module({
  imports: [ServicesModule],
  controllers: [FlightController],
  providers: [FlightControllerService]
})
export class FlightModule {}
