import Image from 'next/image'
import { Inter } from 'next/font/google'
import ProductDetail from '../components/ProductDetail'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ProductDetail />
    </>
  )
}
