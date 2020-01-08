import { Module } from "@nestjs/common";
import { GroupController } from "./group.controller";
import { GroupControllerService } from "./group.service";

@Module({
  controllers: [GroupController],
  providers: [GroupControllerService]
})
export class GroupModule {}
