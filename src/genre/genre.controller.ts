import { Body, Controller, Get, Header, Post, UseGuards } from '@nestjs/common';
import { GenreService } from './genre.service';
import CreateGenreDto from './dto/create-genre.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post('post')
  @ApiBearerAuth()
  @Header('Content-Type', 'application/json')
  @ApiResponse({ status: 200, description: 'create genre' })
  @UseGuards(JwtAuthGuard)
  postGenre(@Body() genre: CreateGenreDto) {
    return this.genreService.insert(genre);
  }

  @Get()
  @ApiBearerAuth()
  @Header('Content-Type', 'application/json')
  @ApiResponse({ status: 200, description: 'get all genres' })
  @UseGuards(JwtAuthGuard)
  getAll() {
    return this.genreService.getAllGenre();
  }
}
