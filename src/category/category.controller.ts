import { CategoryService } from './category.service';
import { Body, Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Category } from './category.entity/category.entity';

@Controller('category')
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

  @Get('product/:id')
  getProductOfCategory(@Param() params) {
    return this.categoryService.getProductOfCategory(params.id)
  }

  @Get('product')
  getCategoryCombineProduct() {
    return this.categoryService.getCategoryProduct()
  }
}
