import { Injectable, Inject } from '@nestjs/common';
import { Payment } from 'src/database/models/payment.model';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject('PAYMENTS_REPOSITORY')
    private readonly paymentRepository: typeof Payment,
  ) {}

  async findAll(): Promise<Payment[]> {
    return await this.paymentRepository.findAll<Payment>();
  }
}
