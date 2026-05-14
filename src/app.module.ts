import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}
