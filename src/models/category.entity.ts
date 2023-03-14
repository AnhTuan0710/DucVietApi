import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity({name: 'category'})
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string
  @OneToMany(() => Product, (product) => product.category)
  products: Product[]
}