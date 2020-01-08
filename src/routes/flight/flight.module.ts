import { Module } from "@nestjs/common";
import { FlightController } from "./flight.controller";
import { FlightControllerService } from "./flight.service";

@Module({
  controllers: [FlightController],
  providers: [FlightControllerService]
})
export class FlightModule {}
