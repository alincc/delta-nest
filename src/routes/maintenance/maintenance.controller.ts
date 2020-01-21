import {
  Controller,
  UseGuards,
  Delete,
  Res,
  HttpStatus,
  Get
} from "@nestjs/common";
import { Roles } from "src/guards/roles.decorator";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard } from "src/guards/roles.guard";
import { MaintenanceControllerService } from "./maintenance.service";
import { Response } from "express";

@Controller("maintenance")
export class MaintenanceController {
  constructor(
    private readonly maintenanceControllerService: MaintenanceControllerService
  ) {}

  ////////////////////////////////////////
  //          GET FUNCTIONS
  ////////////////////////////////////////

  @Get()
  getCurrentState(@Res() response: Response) {
    this.maintenanceControllerService
      .getCurrentState()
      .then(success => {
        return response.status(200).json(success);
      })
      .catch(() => {
        return response.status(500).json({
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: "Deletion Failed"
        });
      });
  }

  ////////////////////////////////////////
  //          DELETE FUNCTIONS
  ////////////////////////////////////////

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Delete()
  resetDatabase(@Res() response: Response) {
    this.maintenanceControllerService
      .resetDataBase()
      .then(success => {
        return response.status(200).json(success);
      })
      .catch(() => {
        return response.status(500).json({
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: "Deletion Failed"
        });
      });
  }
}
