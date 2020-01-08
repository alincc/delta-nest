import { Injectable, Inject } from "@nestjs/common";
import { Student } from "../database/models/student.model";
import { IStudent } from "src/interfaces/student.iterface";

@Injectable()
export class StudentService {
  constructor(
    @Inject("STUDENTS_REPOSITORY")
    private readonly studentRepository: typeof Student
  ) {}

  async findAll(): Promise<Student[]> {
    return await this.studentRepository.findAll<Student>();
  }

  public async findById(id: string): Promise<Student> {
    return await this.studentRepository.findByPk<Student>(id);
  }

  async findOne(username: string): Promise<Student> {
    return await this.studentRepository.findOne<Student>({
      where: { username }
    });
  }

  public async findOrCreate(student: IStudent) {
    return await this.studentRepository.findOrCreate({
      where: { username: student.username },
      defaults: student
    });
  }

  public async deleteOne(id: string) {
    return await this.studentRepository.destroy({
      where: {
        _id: id
      }
    });
  }
}
