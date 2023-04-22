import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar, { Nav } from '../components/Navbar'
import {
  Box,
} from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <Box p={4}>Main content here</Box>
    </>
  )
}
