import { Module } from "@nestjs/common";
import { GroupController } from "./group.controller";
import { GroupControllerService } from "./group.service";
import { ServicesModule } from "src/services/services.module";

@Module({
  imports: [ServicesModule],
  providers: [GroupControllerService],
  controllers: [GroupController]
})
export class GroupModule {}
