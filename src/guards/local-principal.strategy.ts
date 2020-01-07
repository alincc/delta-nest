import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class LocalPrincipalStrategy extends PassportStrategy(
  Strategy,
  "local-principal"
) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const principal = await this.authService.validatePrincipal(
      username,
      password
    );
    if (!principal) {
      throw new UnauthorizedException();
    }
    return principal;
  }
}
