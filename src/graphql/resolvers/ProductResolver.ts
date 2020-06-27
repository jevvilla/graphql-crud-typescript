import { Resolver, Mutation, Arg, Query, ObjectType } from 'type-graphql';
import { Product } from '../../database/entity/Product';

@Resolver()
export class ProductResolver {
  @Mutation(() => Boolean)
  async createProduct(
    @Arg('name') name: string,
    @Arg('quantity') quantity: number,
  ) {
    await Product.insert({ name, quantity });
    return true;
  }

  @Query(() => [Product])
  getProducts() {
    return Product.find();
  }
}
