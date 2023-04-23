import {
  Center,
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Icon
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import NextLink from 'next/link';


const NavLink = ({ href, children }) => (
  <Link as={NextLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('orange.100', 'orange.600'),
    }}
    href={href}>
    {children}
  </Link>
);

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'white'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            variant={'ghost'}
            _hover={{
              textDecoration: 'none',
              bg: 'orange.100',
            }}
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box fontWeight={'bold'} fontSize={'large'}>AfriCurio</Box>
          </HStack>

          <Center
              as={'nav'}
              spacing={8}
              display={{ base: 'none', md: 'flex' }}>
              <NavLink href={'#'}>Decor</NavLink>
              <NavLink href={'#'}>Clothing & Accessories</NavLink>
              <NavLink href={'#'}>Art & Collectibles</NavLink>
              <NavLink href={'#'}>Souvenirs & Gifts</NavLink>

            </Center>
          <Flex alignItems={'center'}>

            <Button
                variant={'ghost'}
               _hover={{
                textDecoration: 'none',
                bg: 'orange.100',
              }}
            >

              <Icon as={ShoppingBagIcon} boxSize={6} />
            </Button>
            
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLink href={'#'}>Decor</NavLink>
              <NavLink href={'#'}>Clothing & Accessories</NavLink>
              <NavLink href={'#'}>Art & Collectibles</NavLink>
              <NavLink href={'#'}>Souvenirs & Gifts</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}