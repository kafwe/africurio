import {
    Button,
    useNumberInput,
    HStack,
    Input
} from '@chakra-ui/react';
import { useState } from 'react'



export default function ProductDetail({ product }) {
    const [quantity, setQuantity] = useState(1)
    const handleChange = (value) => setQuantity(value)

    const handleClick = () => {
        const cartItem = { ...product, quantity }
        localStorage.setItem(product.id, JSON.stringify(cartItem))
    }
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1
    })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()


  return (
        <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" alt={''} src={`/${product.imageSrc}`}/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.categoryName.toUpperCase()}</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                <div className="flex mb-4">
                </div>
                <p className="leading-relaxed">{product.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    <div className="flex items-center">
                        <span className="mr-3">Quantity</span>  
                        <div className="relative">
                            <div className='pl-3 pr-10'>
                                <HStack maxW='320px'>
                                    <Button {...inc}>+</Button>
                                    <Input {...input} onChange={handleChange} />
                                    <Button {...dec}>-</Button>
                                </HStack>
                            </div>
                           
                            
                        </div>
                    </div>
                </div>
                <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">R{product.price}</span>
                <button className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded" onClick={handleClick}>Add to cart</button>
                </div>
            </div>
            </div>
        </div>
        </section>
  );
}
