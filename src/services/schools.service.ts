import { Injectable, Inject } from '@nestjs/common';
import { School } from 'src/database/models/school.model';

@Injectable()
export class SchoolsService {
  constructor(
    @Inject('SCHOOLS_REPOSITORY')
    private readonly schoolsRepository: typeof School,
  ) {}

  async findOne(username: string): Promise<School> {
    return await this.schoolsRepository.findOne<School>({
      where: { username },
    });
  }

  async findAll(): Promise<School[]> {
    return await this.schoolsRepository.findAll<School>();
  }
}
