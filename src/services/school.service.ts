import { Injectable, Inject } from "@nestjs/common";
import { School } from "src/database/models/school.model";

@Injectable()
export class SchoolService {
  constructor(
    @Inject("SCHOOLS_REPOSITORY")
    private readonly schoolRepository: typeof School
  ) {}

  async findAll(): Promise<School[]> {
    return await this.schoolRepository.findAll<School>();
  }
}
