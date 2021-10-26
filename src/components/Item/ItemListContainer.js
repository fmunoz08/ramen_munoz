import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";


import ItemList from "./ItemList";

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

        axios(`http://localhost:9000/${path}`)
            .then((json) => {

                setItems(json.data.productos)
                setLoading(false)
            })
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