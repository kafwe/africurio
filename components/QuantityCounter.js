import {
    Button,
    useNumberInput,
    HStack,
    Input
  } from '@chakra-ui/react';


export default function QuantityCounter({ defaultValue }) {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: defaultValue || 1,
      min: 1
    })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    return (
        <HStack maxW='320px'>
            <Button {...inc}>+</Button>
            <Input {...input} />
            <Button {...dec}>-</Button>
        </HStack>
    )
}