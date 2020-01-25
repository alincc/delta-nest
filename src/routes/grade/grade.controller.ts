import {
  Controller,
  Post,
  Body,
  UseGuards,
  Res,
  Get,
  Param,
  HttpStatus,
  Delete,
  Put
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "src/guards/roles.decorator";
import { RolesGuard } from "src/guards/roles.guard";
import { IResponse } from "src/interfaces/response.interface";
import { Response } from "express";
import { GradeControllerService } from "./grade.service";
import { ReceiveGradeDto } from "src/dtos/receive-grade.dto";
import { IGrade } from "src/interfaces/grade.interface";

@Controller("grades")
export class GradeController {
  constructor(
    private readonly gradeControllerService: GradeControllerService
  ) {}

  ////////////////////////////////////////
  //          GET FUNCTIONS
  ////////////////////////////////////////

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Get()
  async findAll(@Res() response: Response) {
    return this.gradeControllerService
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

    return this.gradeControllerService
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
  //          POST FUNCTION
  ////////////////////////////////////////

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Post()
  async createOne(@Body() grade: ReceiveGradeDto, @Res() response: Response) {
    return this.gradeControllerService
      .createOne((grade as unknown) as IGrade)
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
  //          PUT FUNCTION
  ////////////////////////////////////////

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Put(":id")
  updateOne(
    @Param() param,
    @Body() grade: ReceiveGradeDto,
    @Res() response: Response
  ) {
    const id = param["id"];

    this.gradeControllerService
      .updateOne(id, (grade as unknown) as IGrade)
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
  //          DELETE FUNCTION
  ////////////////////////////////////////

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Delete(":id")
  async deleteOne(@Param() param, @Res() response: Response) {
    const id = param["id"];

    return this.gradeControllerService
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
  @Get("school/:id")
  async findAllInSchool(@Param() param, @Res() response: Response) {
    const id = param["id"];

    return this.gradeControllerService
      .findAllInSchool(id)
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

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Get("subject/:id")
  async findAllInSubject(@Param() param, @Res() response: Response) {
    const id = param["id"];

    return this.gradeControllerService
      .findAllInSubject(id)
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

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Get("student/:id")
  async findAllInStudent(@Param() param, @Res() response: Response) {
    const id = param["id"];

    return this.gradeControllerService
      .findAllInStudent(id)
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
