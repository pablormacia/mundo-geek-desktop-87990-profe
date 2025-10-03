import { useGetCategories } from "../../hooks/useGetCategories"
import CategoryItem from "../category-item/CategoryItem"
import styles from './CategoryListContainer.module.css'
import { Link } from "react-router-dom"

const CategoryListContainer = () => {
    const { categories, loading } = useGetCategories()
    console.log("Categories y loading desde hook: ", categories, loading)

    if (loading) return <p>Cargando categorías...</p>

    return (
        <div className={styles.container}>
            {
                categories.map((category, index) => 
                    <Link to={`/productos/${category.id}`}> <CategoryItem key={index} category={category} /></Link>
            )
            }
        </div>
    )
}

export default CategoryListContainer