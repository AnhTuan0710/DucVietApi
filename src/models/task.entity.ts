import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'dv_task'})
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 }) 
  name: string;

  @Column('text')
  description: string;

  @Column()
  isDone: boolean;
}
