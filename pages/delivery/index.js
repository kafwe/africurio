import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function DeliveryForm() {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={'white'}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Delivery Details
          </Heading>
          <FormControl id="phone" isRequired>
            <FormLabel>Phone number</FormLabel>
            <Input
              type="tel"
            />
          </FormControl>
          <FormControl id="address" isRequired>
            <FormLabel>Delivery address</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="city" isRequired>
            <FormLabel>City</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="state" isRequired>
            <FormLabel>Province</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="zip" isRequired>
            <FormLabel>Zip code</FormLabel>
            <Input type="text" />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={'yellow.400'}
              color={'white'}
              _hover={{
                bg: 'yellow.500',
              }}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }
  