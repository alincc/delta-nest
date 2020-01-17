import {
  Controller,
  Post,
  Body,
  UseGuards,
  Res,
  Get,
  Param,
  HttpException,
  HttpStatus,
  Delete,
  Put
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
  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Get()
  async findAll(@Res() response: Response) {
    return this.programControllerService
      .findAll()
      .then((success: IResponse) => {
        return response.status(201).json(success);
      })
      .catch(error => {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error
          },
          400
        );
      });
  }

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Get("school/:id")
  async findAllInSchool(@Param() param, @Res() response: Response) {
    const id = param["id"];

    return this.programControllerService
      .findAllInSchool(id)
      .then((success: IResponse) => {
        return response.status(201).json(success);
      })
      .catch(error => {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error
          },
          400
        );
      });
  }

  @Roles("PRINCIPAL_ROLE", "STUDENT_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Get(":id")
  async findById(@Param() param, @Res() response: Response) {
    const id = param["id"];

    return this.programControllerService
      .findById(id)
      .then((success: IResponse) => {
        return response.status(201).json(success);
      })
      .catch(error => {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error
          },
          400
        );
      });
  }

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Post()
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
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error
          },
          400
        );
      });
  }

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Put(":id")
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
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error
          },
          400
        );
      });
  }

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Delete(":id")
  async deleteOne(@Param() param, @Res() response: Response) {
    const id = param["id"];

    return this.programControllerService
      .deleteOne(id)
      .then((success: IResponse) => {
        return response.status(201).json(success);
      })
      .catch(error => {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error
          },
          400
        );
      });
  }
}
