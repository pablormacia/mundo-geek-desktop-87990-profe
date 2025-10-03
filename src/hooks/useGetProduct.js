import { useState, useEffect } from 'react'
import products from '../data/products.json'

export function useGetProduct(productId) {
    //Voy a simular la llamada a un servidor utilizando setTimeout
    const [product , setProduct] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const getProduct = () => {
            const productsFinded = products.find(product=>product.id == productId)
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(productsFinded);
                }, 2000);
            });
        };

        getProduct()
            .then((response) => setProduct(response))
            .catch(() => console.log("Error al obtener el producto"))
            .finally(() => setLoading(false))
    }, [])


    return {product ,loading}
}