import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { GenreEntity } from './genre.entity';
import { UserEntity } from './user.entity';

@Entity()
export class BookEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  // n:1 relation with books
  @ManyToOne(() => UserEntity, (user) => user.books)
  user: UserEntity;

  // n:n relation with genre
  @ManyToMany(() => GenreEntity)
  @JoinTable()
  genres: GenreEntity[];
}
