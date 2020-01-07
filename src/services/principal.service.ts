import { Injectable, Inject } from "@nestjs/common";
import { Principal } from "src/database/models/principal.model";

@Injectable()
export class PrincipalService {
  constructor(
    @Inject("PRINCIPALS_REPOSITORY")
    private readonly principalRepository: typeof Principal
  ) {}

  async findAll(): Promise<Principal[]> {
    return await this.principalRepository.findAll<Principal>();
  }

  async findOne(username: string): Promise<Principal> {
    return await this.principalRepository.findOne<Principal>({
      where: { username }
    });
  }
}
