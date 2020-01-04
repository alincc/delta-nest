import { Module } from '@nestjs/common';
import { DatabaseProviders } from './database.provider';
import { ModelsProviders } from './models/model.provider';

@Module({
  providers: [...DatabaseProviders, ...ModelsProviders],
  exports: [...DatabaseProviders, ...ModelsProviders],
})
export class DatabaseModule {}
