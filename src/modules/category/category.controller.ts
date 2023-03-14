import { CategoryService } from './category.service';
import { Controller, Get, Param } from '@nestjs/common';
import { Category } from '../../models/category.entity';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll()
  }

  @Get(':id')
  get(@Param() params) {
    return this.categoryService.findOne(params.id);
  }

  @Get('products/:id')
  getProductOfCategory(@Param() params) {
    return this.categoryService.getProductOfCategory(params.id)
  }

  @Get('products')
  getCategoryCombineProduct() {
    return this.categoryService.getCategoryProduct()
  }
}
