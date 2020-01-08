import { Injectable, Inject } from "@nestjs/common";
import { Principal } from "src/database/models/principal.model";
import { IPrincipal } from "src/interfaces/principal.interface";

@Injectable()
export class PrincipalService {
  constructor(
    @Inject("PRINCIPALS_REPOSITORY")
    private readonly principalRepository: typeof Principal
  ) {}

  public async findAll(): Promise<Principal[]> {
    return await this.principalRepository.findAll<Principal>();
  }

  public async findById(id: string): Promise<Principal> {
    return await this.principalRepository.findByPk<Principal>(id);
  }

  public async findOne(username: string): Promise<Principal> {
    return await this.principalRepository.findOne<Principal>({
      where: { username }
    });
  }

  public async findOrCreate(principal: IPrincipal) {
    return await this.principalRepository.findOrCreate({
      where: { username: principal.username },
      defaults: principal
    });
  }

  public async deleteOne(id: string) {
    return await this.principalRepository.destroy({
      where: {
        _id: id
      }
    });
  }
}
