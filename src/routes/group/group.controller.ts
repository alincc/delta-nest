import { Controller, Post, Body, UseGuards } from "@nestjs/common";
import { ReceiveGroupDto } from "src/dtos/receive-group.dto";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "src/guards/roles.decorator";
import { RolesGuard } from "src/guards/roles.guard";
import { GroupControllerService } from "./group.service";

@Controller("groups")
export class GroupController {
  constructor(
    private readonly groupControllerService: GroupControllerService
  ) {}

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Post()
  createOne(@Body() group: ReceiveGroupDto) {}
}
