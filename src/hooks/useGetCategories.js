import { useState,useEffect } from "react";
import mock_categories from '../data/categories.json'

export function useGetCategories() {
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCategories = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(mock_categories);
                }, 2000);
            });
        };

        getCategories()
            .then((data) => setCategories(data))
            .finally(() => setLoading(false));
    }, []);

    return { categories, loading };
}