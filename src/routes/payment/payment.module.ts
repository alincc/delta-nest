import { Module } from "@nestjs/common";
import { PaymentController } from "./payment.controller";
import { PaymentControllerService } from "./payment.service";

@Module({
  controllers: [PaymentController],
  providers: [PaymentControllerService]
})
export class PaymentModule {}
