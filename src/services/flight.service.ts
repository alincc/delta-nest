import { Injectable, Inject } from '@nestjs/common';
import { Flight } from 'src/database/models/flight.model';

@Injectable()
export class FlightService {
  constructor(
    @Inject('FLIGHTS_REPOSITORY')
    private readonly flightRepository: typeof Flight,
  ) {}

  async findAll(): Promise<Flight[]> {
    return await this.flightRepository.findAll<Flight>();
  }
}
