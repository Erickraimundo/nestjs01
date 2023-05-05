import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDTO } from './book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly BookService: BookService) { }

  @Post()
  async create(@Body() data: BookDTO) {
    return this.BookService.create(data);
  }

  @Get()
  async findAll() {
    return this.BookService.findAll();
  }

  // http://localhost:300/148558135841174958
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: BookDTO) {
    return this.BookService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.BookService.delete(id);
  }
}





