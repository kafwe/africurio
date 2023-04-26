import { Inter } from 'next/font/google'
import ProductGrid from '../../components/ProductGrid'

const inter = Inter({ subsets: ['latin'] })

export default function Decor() {
  return (
    <>
      <ProductGrid category={'decor'}/>
    </>
  );
}
