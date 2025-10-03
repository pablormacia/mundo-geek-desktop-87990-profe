import { useGetProductsByCategory } from "../../hooks/useGetProducts"
import ProductItem from "../product-item/ProductItem"
import NavBar from "../navbar/NavBar"
import { useParams } from "react-router-dom"

const ProductsListContainer = () => {
    const {id} = useParams()
    const { productsFilteredByCategory, loading } = useGetProductsByCategory(id)
    console.log("Products y loading desde hook: ", productsFilteredByCategory, loading)

    if (loading) return <p>Cargando productos...</p>

    return (
        <>
            {
                productsFilteredByCategory.map((product, index) => <ProductItem key={index} product={product} />)
            }
        </>
    )
}

export default ProductsListContainer