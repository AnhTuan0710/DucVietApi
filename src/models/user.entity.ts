import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'dv_user' })
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  email: string;

  @Column('text')
  password: string;
}