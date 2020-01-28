import { Injectable } from "@nestjs/common";

import { IResponse } from "src/interfaces/response.interface";
import { FlightService } from "src/services/flight.service";
import { IFlight } from "src/interfaces/flight.interface";

import * as _ from "lodash";
import { Types } from "mongoose";

@Injectable()
export class FlightControllerService {
  constructor(private readonly flightService: FlightService) {}

  public async findAll(): Promise<IResponse> {
    return this.flightService.findAll().then((document: IFlight[]) => {
      return {
        errors: false,
        statusCode: 200,
        message: "Flights Found",
        count: document.length,
        data: document
      };
    });
  }

  public async findAllInSchool(schoolId: string): Promise<IResponse> {
    return this.flightService
      .findAllInSchool(schoolId)
      .then((document: IFlight[]) => {
        return {
          errors: false,
          statusCode: 200,
          message: "Flights Found",
          count: document.length,
          data: document
        };
      });
  }

  public async findAllInStudent(studentId: string): Promise<IResponse> {
    return this.flightService
      .findAllInStudent(studentId)
      .then((document: IFlight[]) => {
        return {
          errors: false,
          statusCode: 200,
          message: "Flights Found",
          count: document.length,
          data: document
        };
      });
  }

  public async findById(id: string): Promise<IResponse> {
    return this.flightService.findById(id).then((document: IFlight) => {
      return {
        errors: false,
        statusCode: 200,
        message: "Flight Found",
        data: document
      };
    });
  }

  public async createOne(flight: IFlight): Promise<IResponse> {
    return this.flightService
      .createOneOrMany(flight)
      .then((document: IFlight) => {
        return {
          errors: false,
          statusCode: 201,
          message: "Flight Created",
          data: document
        };
      });
  }

  public async updateOne(id: string, flight: IFlight): Promise<IResponse> {
    const sanitizedFlight = _.omit(flight, [
      "_id",
      "enlisted",
      "approved",
      "school",
      "authorizedBy"
    ]);

    return this.flightService
      .updateCreateOne(id, sanitizedFlight as IFlight)
      .then((document: any) => {
        document as IFlight;
        return {
          errors: false,
          statusCode: 200,
          message: "Flight Updated",
          data: document
        };
      });
  }

  public async addRecruit(id: string, studentId: string): Promise<IResponse> {
    return this.flightService
      .addChild(id, { enlisted: Types.ObjectId(studentId) })
      .then((document: any) => {
        document as IFlight;
        return {
          errors: false,
          statusCode: 200,
          message: "Flight Updated",
          data: document
        };
      });
  }

  public async addPilot(id: string, studentId: string): Promise<IResponse> {
    return this.flightService
      .addChild(id, { approved: Types.ObjectId(studentId) })
      .then((document: any) => {
        document as IFlight;
        return {
          errors: false,
          statusCode: 200,
          message: "Flight Updated",
          data: document
        };
      });
  }

  public async removeStudent(
    id: string,
    studentId: string
  ): Promise<IResponse> {
    return this.flightService
      .removeChild(id, {
        enlisted: Types.ObjectId(studentId),
        approved: Types.ObjectId(studentId)
      })
      .then((document: any) => {
        document as IFlight;
        return {
          errors: false,
          statusCode: 200,
          message: "Flight Updated",
          data: document
        };
      });
  }

  public async deleteOne(id: string): Promise<IResponse> {
    return this.flightService.deleteOne(id).then(() => {
      return {
        errors: false,
        statusCode: 200,
        message: "Flight deleted",
        data: null
      };
    });
  }

  public async checkFolio(folio: string): Promise<IResponse> {
    return this.flightService.findOne(folio).then((document: IFlight) => {
      if (!document) {
        throw new Error();
      }
      return {
        errors: false,
        statusCode: 200,
        message: "Subject Found",
        data: document
      };
    });
  }
}
