import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../../models/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly category: Repository<Category>
  ) { }

  async findAll(): Promise<Category[]> {
    return await this.category.find();
  }

  async findOne(id: number): Promise<Category> {
    return await this.category.findOne({ where: { id: id } })
  }

  async getCategoryProduct(): Promise<Category[]> {
    return await this.category.find();
  }

  async getProductOfCategory(categoryId: number): Promise<Category> {
    const category: Category = await this.category.findOne({ where: { id: categoryId }, relations: ['products'] });
    return category
  }
}
