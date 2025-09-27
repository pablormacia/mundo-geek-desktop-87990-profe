import { useGetItem } from "../hooks/useGetItem";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const { item, loading } = useGetItem()
    
    if(loading) return <p>Cargando...</p>

    return (
        <div>
           <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer;