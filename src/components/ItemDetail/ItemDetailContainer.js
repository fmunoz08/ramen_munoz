import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { db } from "../../firebaseConfig";

import { collection, getDocs, query, where } from "@firebase/firestore";

function ItemDetailContainer( ) {
    const [items, setItems] = useState({});
    const [fireId, setFireId] = useState('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const requestData = async () => {
            const q = query(
                collection(db, "productos"),
                where("id", "==", Number(window.location.pathname.split("/")[2]))
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((document) => {
                setFireId(document.id);
                setItems(document.data());
            });
            setLoading(false);
        };

        requestData();
    }, []);

    return (
        <React.Fragment>
            {loading && <h3>Cargando</h3>}
            {!loading && <ItemDetail Data={items} id={fireId} />}
        </React.Fragment>
    );
}
export default ItemDetailContainer;
