import { Injectable, Inject } from "@nestjs/common";
import { IFlight } from "src/interfaces/flight.interface";
import { Model, Types } from "mongoose";

@Injectable()
export class FlightService {
  constructor(
    @Inject("FLIGHT_MODEL")
    private readonly flightModel: Model<IFlight>
  ) {}

  async findAll(): Promise<IFlight[]> {
    return await this.flightModel.find().exec();
  }

  public async findById(id: string): Promise<IFlight> {
    return await this.flightModel.findById(id).exec();
  }

  async findAllInSchool(schoolId: string): Promise<IFlight[]> {
    return await this.flightModel
      .find({
        schools: Types.ObjectId(schoolId)
      })
      .exec();
  }

  public async findOne(folio: string): Promise<IFlight> {
    return await this.flightModel.findOne({ folio }).exec();
  }

  public async createOneOrMany(
    flight: IFlight | IFlight[]
  ): Promise<IFlight | IFlight[]> {
    return await this.flightModel.create(flight);
  }

  public async updateCreateOne(id: string, flight: IFlight) {
    return await this.flightModel
      .findByIdAndUpdate(id, flight, {
        new: true,
        runValidators: true,
        upsert: true
      })
      .exec();
  }

  public async updateMany(conditions: IFlight, newValues: IFlight) {
    return await this.flightModel
      .updateMany(conditions, { $set: newValues })
      .exec();
  }

  public async pullMany(conditions: IFlight, pullProperties: IFlight) {
    return await this.flightModel
      .findOneAndUpdate(
        conditions,
        {
          $pullAll: { pullProperties }
        },
        { new: true }
      )
      .exec();
  }

  public async deleteOne(id: string) {
    return await this.flightModel.deleteOne({ _id: Types.ObjectId(id) }).exec();
  }

  public async deleteMany(conditions: IFlight) {
    return await this.flightModel.deleteMany(conditions).exec();
  }
}
