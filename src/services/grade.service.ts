import { Injectable, Inject } from "@nestjs/common";
import { Grade } from "src/database/models/grade.model";

@Injectable()
export class GradeService {
  constructor(
    @Inject("GRADES_REPOSITORY")
    private readonly gradeRepository: typeof Grade
  ) {}

  async findAll(): Promise<Grade[]> {
    return await this.gradeRepository.findAll<Grade>();
  }
}
