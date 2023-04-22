import {
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
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import NextLink from 'next/link';


const NavLink = ({ href, children }) => (
  <Link as={NextLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}>
    {children}
  </Link>
);

export default function withAction() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box  fontWeight={'bold'}>AfriCurio</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <NavLink href={'#'}>Decor</NavLink>
              <NavLink href={'#'}>Clothing & Accessories</NavLink>
              <NavLink href={'#'}>Art & Collectibles</NavLink>
              <NavLink href={'#'}>Souvenirs & Gifts</NavLink>

            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button onClick={toggleColorMode} mr={1}>
                  {colorMode === 'light' ? <MoonIcon boxSize={5} /> : <SunIcon boxSize={5} />}
            </Button>
            <Button>

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