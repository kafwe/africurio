import ProductDetail from '../../components/ProductDetail';
import products from '../../data/products';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { useState, useEffect } from 'react';

export default function ProductDetailPage() {
    const [id, setId] = useState(null);
    const router = useRouter()

    useEffect(()=>{
        if(!router.isReady) return;
        const { productId } = router.query
        setId(productId)

    }, [router.isReady]);


    

    const product = products.find(product => product.id === id)

    if (!product && router.isReady) {
        return <Error statusCode={404} />
    }

    return (
        <>
            <ProductDetail product={product} />
        </>
    )
}
