import { Inter } from 'next/font/google';
import { Center, Stack, Text, Heading, Box} from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] })



export default function About() {
  return (
    <Box mt={'4'}>
        <Heading as='h1' size='2xl' >
            About us
        </Heading>
        <Center mt={2}>
            <Stack spacing={3}>
                <Text fontSize='md'>
                Welcome to AfriCurios, your online destination for authentic and unique African art and culture! 
                We are passionate about showcasing the rich and diverse heritage of Africa through our curated collection of handmade products from talented artisans across the continent. 
                Whether you are looking for a stunning piece of jewelry, a colorful basket, a vibrant painting, or a cozy textile, you will find something that speaks to you at AfriCurios.
                <br />
                Our mission is to connect you with the stories and traditions behind each product, while also empowering the artisans who create them. 
                We believe that by providing a global platform for African art and culture, we can help to address two major social 
                challenges: the lack of exposure and access to African culture in many parts of the world, and the economic barriers that African artisans face in reaching the global market. 
                By shopping at AfriCurios, you are not only supporting the livelihoods of these artisans, but also celebrating and preserving their cultural heritage.
                <br />
                We invite you to explore our site and discover the beauty and diversity of Africa. Thank you for choosing Africurios!
                </Text>
            </Stack>
        </Center>
    </Box>
  );
}
