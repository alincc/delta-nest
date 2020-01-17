import { Module } from "@nestjs/common";
import { PaymentController } from "./payment.controller";
import { PaymentControllerService } from "./payment.service";
import { ServicesModule } from "src/services/services.module";

@Module({
  imports: [ServicesModule],
  controllers: [PaymentController],
  providers: [PaymentControllerService]
})
export class PaymentModule {}
