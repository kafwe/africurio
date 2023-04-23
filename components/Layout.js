import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import {
  Box,
} from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Box>
        {children}
      </Box>
    </>
  )
}
