import { Category } from './category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: 'dv_product' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price?: number;

  @Column()
  image?: string;

  @Column()
  size?: string;

  @Column()
  weight?: string;

  @Column()
  description?: string;

  @Column()
  active_flg?: number;

  @Column()
  status?: number;

  @Column()
  create_date?: Date;

  @Column()
  update_date?: Date;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category
}
