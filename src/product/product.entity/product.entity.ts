import { Category } from './../../category/category.entity/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @ManyToOne(() => Category, (category) => category.products)
  category: Category
}
