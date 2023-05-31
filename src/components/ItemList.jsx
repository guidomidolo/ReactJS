import Item from "./Item";

const ItemList = ( {listadoItems} ) => {
    return (
        <>
            {
            listadoItems.map(item => 
                <Item item={item} />
                )    
            } 
        </>
    )
}

export default ItemList;