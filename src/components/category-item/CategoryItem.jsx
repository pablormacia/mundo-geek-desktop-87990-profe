import Card from "../card/Card"
import { Link } from "react-router-dom"
import styles from './CategoryItem.module.css'

const CategoryItem = ({ category }) => {
  return (
    <Link to={`/products/${category.id}`}>
      <Card className={styles.cardContainer}>
        <div>
          <img src={category.image} alt="Imagen de categoría" />
        </div>
        
        <p>{category.title}</p>
      </Card>
    </Link>
  )
}

export default CategoryItem