import {
  Body,
  Controller,
  Get,
  Header,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import CreateUserDto from './dto/create-user.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly usersServices: UserService) {}

  //'postUser()' will handle the creating of new User
  @Post('post')
  @Header('Content-Type', 'application/json')
  @ApiResponse({ status: 200, description: 'create user' })
  postUser(@Body() user: CreateUserDto) {
    return this.usersServices.insert(user);
  }
  // 'getAll()' returns the list of all the existing users in the database
  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Header('Content-Type', 'application/json')
  @ApiResponse({ status: 200, description: 'get all users' })
  getAll() {
    return this.usersServices.getAllUsers();
  }

  //'getBooks()' return all the books which are associated with the user
  // provided through 'userID' by the request
  @Get('books')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Header('Content-Type', 'application/json')
  @ApiResponse({ status: 200, description: 'get books of user' })
  getBooks(@Body('userID', ParseIntPipe) userID: number) {
    return this.usersServices.getBooksOfUser(userID);
  }
}
