import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import BooksModule from './books/books.module';
import GenreModule from './genre/genre.module';
import { BookEntity } from './db/entity/book.entity';
import { GenreEntity } from './db/entity/genre.entity';
import { UserEntity } from './db/entity/user.entity';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { JobseekerModule } from './jobseeker/jobseeker.module';
@Module({
  imports: [
    UserModule,
    BooksModule,
    GenreModule,
    TypeOrmModule.forFeature([UserEntity, BookEntity, GenreEntity]),

    TypeOrmModule.forRoot(),

    AuthModule,
    JobseekerModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
