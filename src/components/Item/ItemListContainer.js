import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { db } from '../../firebaseConfig';


import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "@firebase/firestore";

const Title = styled.h1`
    text-align: center;
`;


const Background = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;



function ItemListContainer({ greeting, path, addcart }) {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        let newItemList = [];
        const requestData = async () => {
            const q = path === "/" ? query(collection(db, "productos")) : query(collection(db, "productos"), where('type', '==', path.toUpperCase()));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((document) => {
                newItemList.push(document.data())
            })
            setItems(newItemList);
            setLoading(false)
        }

        requestData();
    }, [path]);


    return (
        <Background>
            <Title>{greeting}</Title>
            {
                loading &&
                <h3>Cargando</h3>
            }
            {
                !loading &&
                <React.Fragment>
                    <ItemList Items={items} />

                </React.Fragment>
            }


        </Background>
    );
}

export default ItemListContainer;