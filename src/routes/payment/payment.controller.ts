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
import { IResponse } from "src/interfaces/response.interface";
import { Response } from "express";
import { IGroup } from "src/interfaces/group.interface";
import { PaymentControllerService } from "./payment.service";
import { ReceivePaymentDto } from "src/dtos/receive-payment.dto";
import { IPayment } from "src/interfaces/payment.interface";

@Controller("payments")
export class PaymentController {
  constructor(
    private readonly paymentControllerService: PaymentControllerService
  ) {}

  ////////////////////////////////////////
  //          GET FUNCTIONS
  ////////////////////////////////////////

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Get()
  async findAll(@Res() response: Response) {
    return this.paymentControllerService
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

    return this.paymentControllerService
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
  async createOne(
    @Body() payment: ReceivePaymentDto,
    @Res() response: Response
  ) {
    return this.paymentControllerService
      .createOne((payment as unknown) as IPayment)
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

    this.paymentControllerService
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

    return this.paymentControllerService
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

    return this.paymentControllerService
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

  @Roles("PRINCIPAL_ROLE", "STUDENT_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Get("student/:id")
  async findAllInStudent(@Param() param, @Res() response: Response) {
    const id = param["id"];

    return this.paymentControllerService
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

  ////////////////////////////////////////
  //          GET VALIDATION FUNCTIONS
  ////////////////////////////////////////

  @Get("folio/:folio")
  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  async checkFolio(@Param() param, @Res() response: Response) {
    const folio = param["folio"];

    return this.paymentControllerService
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
