import {
  Controller,
  UseGuards,
  Post,
  Req,
  Body,
  HttpStatus,
  HttpException,
  Res,
  Get,
  Param,
  Delete,
  Put
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "src/guards/roles.decorator";
import { RolesGuard } from "src/guards/roles.guard";
import { Response, Request } from "express";
import { IUser } from "src/interfaces/user.interface";
import { IResponse } from "src/interfaces/response.interface";
import { PrincipalControllerService } from "./principal.service";
import { ReceiveUserDto } from "src/dtos/receive-user.dto";

@Controller("principals")
export class PrincipalController {
  constructor(
    private readonly principalControllerService: PrincipalControllerService
  ) {}
  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Get()
  async findAll(@Req() request, @Res() response: Response) {
    return this.principalControllerService
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

    return this.principalControllerService
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

    return this.principalControllerService
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
    @Body() principal: ReceiveUserDto,
    @Req() request: Request,
    @Res() response: Response
  ) {
    const user = request.user as IUser;

    return this.principalControllerService
      .createOne(user, (principal as unknown) as IUser)
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
    @Body() principal: ReceiveUserDto,
    @Res() response: Response
  ) {
    const id = param["id"];

    this.principalControllerService
      .updateOne(id, (principal as unknown) as IUser)
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

    return this.principalControllerService
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
