import { Controller, Get } from '@nestjs/common';
import { Product } from './product.entity/product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll()
  }
}
