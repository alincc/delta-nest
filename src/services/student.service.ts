import { Injectable, Inject } from '@nestjs/common';
import { Student } from '../database/models/student.model';

@Injectable()
export class StudentService {
  constructor(
    @Inject('STUDENTS_REPOSITORY')
    private readonly studentRepository: typeof Student,
  ) {}

  async findAll(): Promise<Student[]> {
    return await this.studentRepository.findAll<Student>();
  }

  async findOne(username: string): Promise<Student> {
    return await this.studentRepository.findOne<Student>({
      where: { username },
    });
  }
}
