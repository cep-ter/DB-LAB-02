import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  JoinTable,
} from 'typeorm';
import ProjectEntity from './project.entity';

@Entity()
export default class EmployerEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  first_name: string;

  @Column({ length: 500 })
  last_name: string;

  @Column({ length: 500, unique: true })
  username: string;

  @Column({ length: 500 })
  password: string;

  @Column({ length: 500 })
  email: string;

  @Column({ length: 500 })
  phone_number: string;

  // 1:n relation with project
  @OneToMany(() => ProjectEntity, (project) => project.employer)
  @JoinTable()
  projects: ProjectEntity[];
}
