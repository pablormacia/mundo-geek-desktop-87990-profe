import { useGetCategories } from "../hooks/useGetCategories"

const ItemListContainer = () => {
    const {categories,loading} = useGetCategories()

    if (loading) return <p>Cargando...</p>
    return(
        <div>
            {
            categories.map(((category,index)=><p key={index}>{category.title}</p>))
            }
        </div>
    )
}

export default ItemListContainer