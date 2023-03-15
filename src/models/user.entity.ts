import { IsEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'dv_user' })
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  email: string;

  @Column()
  password: string;

  @IsEmpty()
  @Column({
    length: 500,
    default: '',
  })
  address?: string;

  @IsEmpty()
  @Column({
    length: 12,
    default: ''
  })
  phone_no?: string;

  @IsEmpty()
  @Column()
  create_date?: Date;

  @Column()
  update_date?: Date;

  @IsEmpty()
  @Column({
    default: 1
  })
  active_flg?: number;

  @IsEmpty()
  @Column({
    default: 1
  })
  status?: number;
}