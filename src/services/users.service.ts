import { Injectable, Inject } from '@nestjs/common';
import { User } from '../database/models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private readonly usersRepository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll<User>();
  }

  async findOne(username: string): Promise<User> {
    return await this.usersRepository.findOne<User>({ where: { username } });
  }

  async findBySchoolId(schoolId: number): Promise<User[]> {
    return await this.usersRepository.findAll<User>({
      where: { school: schoolId },
    });
  }
}
