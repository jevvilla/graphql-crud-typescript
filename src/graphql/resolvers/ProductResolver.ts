import {
  Resolver,
  Mutation,
  Arg,
  Query,
  Field,
  InputType,
  Int,
} from 'type-graphql';
import { Product } from '../../database/entity/Product';

@InputType()
class ProductInput {
  @Field()
  name!: string;

  @Field()
  quantity!: number;
}

@InputType()
class ProductUpdateInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  quantity?: number;
}

@Resolver()
export class ProductResolver {
  @Mutation(() => Product)
  async createProduct(
    @Arg('product', () => ProductInput) product: ProductInput,
  ) {
    return await Product.create(product).save();
  }

  @Query(() => [Product])
  async getProducts() {
    return await Product.find();
  }

  @Query(() => Product)
  async getProduct(@Arg('id', () => Int) id: number) {
    return await Product.findOne(id);
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Arg('id', () => Int) id: number) {
    await Product.delete(id);
    return true;
  }

  @Mutation(() => Boolean)
  async updateProduct(
    @Arg('id', () => Int) id: number,
    @Arg('product', () => ProductUpdateInput) product: ProductUpdateInput,
  ) {
    await Product.update({ id }, product);
    return true;
  }
}
