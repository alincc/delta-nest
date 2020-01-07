import { Injectable, Inject } from '@nestjs/common';
import { Group } from 'src/database/models/group.model';

@Injectable()
export class GroupService {
  constructor(
    @Inject('GROUPS_REPOSITORY')
    private readonly groupRepository: typeof Group,
  ) {}

  async findAll(): Promise<Group[]> {
    return await this.groupRepository.findAll<Group>();
  }
}
