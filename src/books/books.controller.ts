import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { DeleteBookDto } from './dto/delete-book.dto';
import { PutBookDto } from './dto/put-book.dto';

@Controller('book')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Post('post')
  postBook(@Body() book: CreateBookDto) {
    return this.booksService.insert(book);
  }
  @Get()
  getAll() {
    return this.booksService.getAllBooks();
  }

  @Delete()
  DeleteBook(@Body() book: DeleteBookDto) {
    return this.booksService.deleteBook(book);
  }

  @Put()
  putBook(@Body() book: PutBookDto) {
    return this.booksService.putBook(book);
  }
}
