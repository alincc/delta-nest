import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthPrincipalService } from "src/auth/auth-principal.service";

@Injectable()
export class LocalPrincipalStrategy extends PassportStrategy(
  Strategy,
  "local-principal"
) {
  constructor(private readonly authPrincipalService: AuthPrincipalService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const principal = await this.authPrincipalService.validatePrincipal(
      username,
      password
    );
    if (!principal) {
      throw new UnauthorizedException();
    }
    return principal;
  }
}
