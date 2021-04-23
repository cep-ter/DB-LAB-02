import { Injectable } from '@nestjs/common';
import CreateUserDto from './dto/create-user.dto';
import { BookEntity } from '../db/entity/book.entity';
import { UserEntity } from '../db/entity/user.entity';

@Injectable()
export class UserService {
  async insert(userDetails: CreateUserDto): Promise<UserEntity> {
    const userEntity: UserEntity = UserEntity.create();
    const { name, books, username, password } = userDetails;
    userEntity.name = name;
    userEntity.username = username;
    userEntity.password = password;
    for (let i = 0; i < books.length; i++) {
      const book = await BookEntity.findOne(books[i]);
      userEntity.books.push(book);
    }
    await UserEntity.save(userEntity);
    return userEntity;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await UserEntity.find();
  }

  async getBooksOfUser(userID: number): Promise<BookEntity[]> {
    console.log(typeof userID);
    const user: UserEntity = await UserEntity.findOne({
      where: { id: userID },
      relations: ['books'],
    });
    return user.books;
  }
}
