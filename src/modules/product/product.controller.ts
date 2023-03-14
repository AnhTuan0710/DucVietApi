import { Controller, Get } from '@nestjs/common';
import { Product } from '../../models/product.entity';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll()
  }
}
