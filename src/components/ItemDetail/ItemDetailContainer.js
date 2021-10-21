import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";



function ItemDetailContainer({ addcart }) {

    const [items, setItems] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        axios(`http://localhost:9000/${window.location.pathname.split("/")[2]}`)
            .then((json) => {
                setItems(json.data)
                setLoading(false)
            })

    }, []);

    return (
        <React.Fragment>
            {
                loading &&
                <h3>Cargando</h3>
            }
            {
                !loading &&
                <ItemDetail addcart={addcart} Data={items} />
            }
        </React.Fragment>
    );

}
export default ItemDetailContainer;
