import Navbar from './Navbar'
import {
  Box,
} from '@chakra-ui/react';



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
