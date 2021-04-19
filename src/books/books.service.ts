import { Injectable } from '@nestjs/common';
import { BookEntity } from 'src/db/entity/book.entity';
import { GenreEntity } from 'src/db/entity/genre.entity';
import { UserEntity } from 'src/db/entity/user.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { DeleteBookDto } from './dto/delete-book.dto';
import { PutBookDto } from './dto/put-book.dto';

@Injectable()
export class BooksService {
  async insert(bookDetails: CreateBookDto): Promise<BookEntity> {
    const { name, userID, genreIDs } = bookDetails;
    const book = new BookEntity();
    book.name = name;
    book.user = await UserEntity.findOne(userID);
    book.genres = [];
    for (let i = 0; i < genreIDs.length; i++) {
      const genre = await GenreEntity.findOne(genreIDs[i]);
      book.genres.push(genre);
    }
    await book.save();
    return book;
  }
  async getAllBooks(): Promise<BookEntity[]> {
    // const user: UserEntity = await UserEntity.findOne({where: {id: 2}, relations: ['books']});
    return BookEntity.find();
  }
  async deleteBook(bookDetails: DeleteBookDto): Promise<BookEntity> {
    const { bookID } = bookDetails;
    const book = await BookEntity.findOne(bookID);
    await book.remove();
    return book;
  }
  async putBook(bookDetails: PutBookDto): Promise<BookEntity> {
    const { bookID, name, userID, genreIDs } = bookDetails;
    const book = await BookEntity.findOne(bookID);
    if (book == undefined) {
      return null;
    }
    book.name = name;
    book.user = await UserEntity.findOne(userID);
    book.genres = [];
    for (let i = 0; i < genreIDs.length; i++) {
      const genre = await GenreEntity.findOne(genreIDs[i]);
      book.genres.push(genre);
    }
    await book.save();
    return book;
  }
}
