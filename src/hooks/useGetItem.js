import { useState,useEffect } from "react";

export function useGetItem() {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getItem = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        id: 1,
                        title: 'Producto Ejemplo',
                        description: 'Descripción del producto.',
                        price: 100,
                        imageUrl: 'https://placehold.co/150',
                    });
                }, 2000);
            });
        };

        getItem()
            .then((data) => setItem(data))
            .finally(() => setLoading(false));
    }, []);

    return { item, loading };
}