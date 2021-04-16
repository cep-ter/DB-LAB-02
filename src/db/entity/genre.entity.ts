import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class GenreEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;
}
