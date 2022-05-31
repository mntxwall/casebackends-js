import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database.service';
import { WebTableService } from './web-table.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DatabaseService, WebTableService, ],//PrismaService
})
export class AppModule {}
