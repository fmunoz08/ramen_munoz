import React, {useEffect,useState} from "react";
import { GetProducto } from "../services/getData";
import ItemDetail from "./ItemDetail";



function ItemDetailContainer ({number, show, close,addcart}) {

    const [items,setItems] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect( () => {
        GetProducto(number)
            .then(res => {             
                    setItems(res.data);
                    setLoading(false);
            })
            .catch(err => {
                console.log(err);


            });
    }, []);

    return (
        <React.Fragment>
        {
            loading && 
                <h3>Cargando</h3>
        }
        {
            !loading && 
        <ItemDetail close={close} addcart={addcart} Data={items}/>
        }
        </React.Fragment>
    );

}
export default ItemDetailContainer;
