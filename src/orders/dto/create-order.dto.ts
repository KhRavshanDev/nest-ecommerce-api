import { Type } from 'class-transformer';
import { ShippingOrderDto } from './shipping-order.dto';
import { ValidateNested } from 'class-validator';
import { OrderedProductsDto } from './ordered-products.dto';

export class CreateOrderDto {
  @Type(() => ShippingOrderDto)
  @ValidateNested()
  shippingAddress: ShippingOrderDto;

  @Type(() => OrderedProductsDto)
  @ValidateNested()
  orderedProducts: OrderedProductsDto[];
}
