import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { DeleteBookDto } from './dto/delete-book.dto';
import { PutBookDto } from './dto/put-book.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('book')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('post')
  @ApiBearerAuth()
  @Header('Content-Type', 'application/json')
  @ApiResponse({ status: 200, description: 'create book' })
  @UseGuards(JwtAuthGuard)
  postBook(@Body() book: CreateBookDto) {
    return this.booksService.insert(book);
  }

  @Get()
  @ApiBearerAuth()
  @Header('Content-Type', 'application/json')
  @ApiResponse({ status: 200, description: 'get all books' })
  @UseGuards(JwtAuthGuard)
  getAll() {
    return this.booksService.getAllBooks();
  }

  @Delete()
  @ApiBearerAuth()
  @Header('Content-Type', 'application/json')
  @ApiResponse({ status: 200, description: 'delete book' })
  @UseGuards(JwtAuthGuard)
  DeleteBook(@Body() book: DeleteBookDto) {
    return this.booksService.deleteBook(book);
  }

  @Put()
  @ApiBearerAuth()
  @Header('Content-Type', 'application/json')
  @ApiResponse({ status: 200, description: 'update book' })
  @UseGuards(JwtAuthGuard)
  putBook(@Body() book: PutBookDto) {
    return this.booksService.putBook(book);
  }
}
