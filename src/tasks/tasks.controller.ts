import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks() {
    return 'This action returns all tasks';
  }

  @Post()
  createTask(@Body() task: any) {
    return 'This action creates a new task';
  }
}
