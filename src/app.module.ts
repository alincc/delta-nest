import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [AuthModule, ServicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
