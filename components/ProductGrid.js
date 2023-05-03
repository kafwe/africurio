import ProductCard from './ProductCard';
import products from '../data/products';
import { Heading } from '@chakra-ui/react';

export default function ProductGrid({ category }) {
    const filteredProducts = category ? 
    products.filter(product => product.category === category) : products;

    const categoryHeading = category ? 
    filteredProducts[0].categoryName : 'Shop All';

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <Heading as='h1' size='2xl' mb={8} >{categoryHeading}</Heading>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
}
  