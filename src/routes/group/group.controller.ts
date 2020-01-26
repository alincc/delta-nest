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
import { ReceiveGroupDto } from "src/dtos/receive-group.dto";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "src/guards/roles.decorator";
import { RolesGuard } from "src/guards/roles.guard";
import { GroupControllerService } from "./group.service";
import { IResponse } from "src/interfaces/response.interface";
import { Response } from "express";
import { IGroup } from "src/interfaces/group.interface";

@Controller("groups")
export class GroupController {
  constructor(
    private readonly groupControllerService: GroupControllerService
  ) {}

  ////////////////////////////////////////
  //          GET FUNCTIONS
  ////////////////////////////////////////

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Get()
  async findAll(@Res() response: Response) {
    return this.groupControllerService
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

    return this.groupControllerService
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
  async createOne(@Body() group: ReceiveGroupDto, @Res() response: Response) {
    return this.groupControllerService
      .createOne((group as unknown) as IGroup)
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
    @Body() group: ReceiveGroupDto,
    @Res() response: Response
  ) {
    const id = param["id"];

    this.groupControllerService
      .updateOne(id, (group as unknown) as IGroup)
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

    return this.groupControllerService
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

    return this.groupControllerService
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
  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Put(":id/student/:studentId")
  addMember(@Param() param, @Res() response: Response) {
    const id = param["id"];
    const studentId = param["studentId"];

    this.groupControllerService
      .addMember(id, studentId)
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

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Delete(":id/student/:studentId")
  removeMember(@Param() param, @Res() response: Response) {
    const id = param["id"];
    const studentId = param["studentId"];

    this.groupControllerService
      .removeMember(id, studentId)
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
}
