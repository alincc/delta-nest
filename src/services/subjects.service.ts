import { Injectable, Inject } from '@nestjs/common';
import { Subject } from 'src/database/models/subject.model';

@Injectable()
export class SubjectService {
  constructor(
    @Inject('SUBJECTS_REPOSITORY')
    private readonly subjectRepository: typeof Subject,
  ) {}

  async findAll(): Promise<Subject[]> {
    return await this.subjectRepository.findAll<Subject>();
  }
}
