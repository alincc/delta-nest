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
  Put,
  Headers
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "src/guards/roles.decorator";
import { RolesGuard } from "src/guards/roles.guard";
import { IResponse } from "src/interfaces/response.interface";
import { Response } from "express";
import { ProgramControllerService } from "./program.service";
import { ReceiveProgramDto } from "src/dtos/receive-program.dto";
import { IProgram } from "src/interfaces/program.interface";

@Controller("programs")
export class ProgramController {
  constructor(
    private readonly programControllerService: ProgramControllerService
  ) {}

  ////////////////////////////////////////
  //          GET FUNCTIONS
  ////////////////////////////////////////

  @Get()
  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  async findAll(@Res() response: Response) {
    return this.programControllerService
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

  @Get(":id")
  @Roles("PRINCIPAL_ROLE", "STUDENT_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  async findById(@Param() param, @Res() response: Response) {
    const id = param["id"];

    return this.programControllerService
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

  @Post()
  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  async createOne(
    @Body() program: ReceiveProgramDto,
    @Res() response: Response
  ) {
    return this.programControllerService
      .createOne((program as unknown) as IProgram)
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

  @Put(":id")
  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  updateOne(
    @Param() param,
    @Body() program: ReceiveProgramDto,
    @Res() response: Response
  ) {
    const id = param["id"];

    this.programControllerService
      .updateOne(id, (program as unknown) as IProgram)
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

  @Delete(":id")
  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  async deleteOne(@Param() param, @Res() response: Response) {
    const id = param["id"];

    return this.programControllerService
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

  @Get("school/:id")
  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  async findAllInSchool(@Param() param, @Res() response: Response) {
    const id = param["id"];

    return this.programControllerService
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

  ////////////////////////////////////////
  //          CRUD CHILD FUNCTIONS
  ////////////////////////////////////////
  @Put(":id/subject/:subjectId")
  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  addSubject(@Param() param, @Res() response: Response) {
    const id = param["id"];
    const subjectId = param["subjectId"];

    this.programControllerService
      .addSubject(id, subjectId)
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

  @Delete(":id/subject/:subjectId")
  // @Roles("PRINCIPAL_ROLE")
  // @UseGuards(AuthGuard("jwt"), RolesGuard)
  removeSubject(@Param() param, @Res() response: Response) {
    const id = param["id"];
    const subjectId = param["subjectId"];

    this.programControllerService
      .removeSubject(id, subjectId)
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
  //          GET VALIDATION FUNCTIONS
  ////////////////////////////////////////

  @Get("folio/:folio")
  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  async checkFolio(@Param() param, @Res() response: Response) {
    const folio = param["folio"];

    return this.programControllerService
      .checkFolio(folio)
      .then((success: IResponse) => {
        return response.status(201).json(success);
      })
      .catch(error => {
        return response.status(404).json({
          status: HttpStatus.NOT_FOUND,
          error: "Folio Not Found"
        });
      });
  }
}
