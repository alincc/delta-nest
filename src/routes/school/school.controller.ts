import {
  Controller,
  UseGuards,
  Post,
  Body,
  HttpStatus,
  Res,
  Get,
  Param,
  Delete,
  Put
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "src/guards/roles.decorator";
import { RolesGuard } from "src/guards/roles.guard";
import { ReceiveSchoolDto } from "src/dtos/receive-school.dto";
import { SchoolControllerService } from "./school.service";
import { ISchool } from "src/interfaces/school.interface";
import { Response } from "express";
import { IResponse } from "src/interfaces/response.interface";

@Controller("schools")
export class SchoolController {
  constructor(
    private readonly schoolControllerService: SchoolControllerService
  ) {}

  ////////////////////////////////////////
  //          GET FUNCTIONS
  ////////////////////////////////////////

  @Get()
  async findAll(@Res() response: Response) {
    return this.schoolControllerService
      .findAll()
      .then((success: IResponse) => {
        return response.status(201).json(success);
      })
      .catch(error => {
        return response.status(400).json({
          status: HttpStatus.BAD_REQUEST,
          error
        });
      });
  }

  @Roles("PRINCIPAL_ROLE", "STUDENT_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Get(":id")
  async findById(@Param() param, @Res() response: Response) {
    const id = param["id"];

    return this.schoolControllerService
      .findById(id)
      .then((success: IResponse) => {
        return response.status(201).json(success);
      })
      .catch(error => {
        return response.status(400).json({
          status: HttpStatus.BAD_REQUEST,
          error
        });
      });
  }

  ////////////////////////////////////////
  //          POST FUNCTIONS
  ////////////////////////////////////////

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Post()
  async createOne(@Body() school: ReceiveSchoolDto, @Res() response: Response) {
    return this.schoolControllerService
      .createOne((school as unknown) as ISchool)
      .then((success: IResponse) => {
        return response.status(201).json(success);
      })
      .catch(error => {
        return response.status(400).json({
          status: HttpStatus.BAD_REQUEST,
          error
        });
      });
  }

  ////////////////////////////////////////
  //          PUT FUNCTIONS
  ////////////////////////////////////////

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Put(":id")
  updateOne(
    @Param() param,
    @Body() school: ReceiveSchoolDto,
    @Res() response: Response
  ) {
    const id = param["id"];

    this.schoolControllerService
      .updateOne(id, (school as unknown) as ISchool)
      .then((success: IResponse) => {
        return response.status(200).json(success);
      })
      .catch(error => {
        return response.status(400).json({
          status: HttpStatus.BAD_REQUEST,
          error
        });
      });
  }

  ////////////////////////////////////////
  //          DELETE FUNCTIONS
  ////////////////////////////////////////

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Delete(":id")
  async deleteOne(@Param() param, @Res() response: Response) {
    const id = param["id"];

    return this.schoolControllerService
      .deleteOne(id)
      .then((success: IResponse) => {
        return response.status(201).json(success);
      })
      .catch(error => {
        return response.status(400).json({
          status: HttpStatus.BAD_REQUEST,
          error
        });
      });
  }

  ////////////////////////////////////////
  //          GET PARENT FUNCTIONS
  ////////////////////////////////////////

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Get("principal/:id")
  async findAllInPrincipal(@Param() param, @Res() response: Response) {
    const id = param["id"];

    return this.schoolControllerService
      .findAllInPrincipal(id)
      .then((success: IResponse) => {
        return response.status(201).json(success);
      })
      .catch(error => {
        return response.status(400).json({
          status: HttpStatus.BAD_REQUEST,
          error
        });
      });
  }
}
