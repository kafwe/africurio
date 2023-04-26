import ProductGrid from '../../components/ProductGrid'
import { Stack } from '@chakra-ui/react';

export default function All() {
  return (
    <>
        <Stack spacing={4} mt={4}>
            <ProductGrid category={'arts'} />
        </Stack>
    </>
  );
}
