import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks() {
    return this.tasksService.findAll();
  }

  @Post()
  createTask(@Body() task: any) {
    return this.tasksService.create(task);
  }
}
