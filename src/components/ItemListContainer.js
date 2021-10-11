import React, { useEffect, useState } from "react";
import styled from "styled-components";


import ItemList from "./ItemList";

import {GetData} from "../services/getData";
const Title = styled.h1`
    text-align: center;
`;


const Background = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;



function ItemListContainer  ({greeting, addcart}) {

    const [items,setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect( () => {
       
        GetData()
            .then(res => {             
                    setItems(res.data.productos);
                    setLoading(false);
            })
            .catch(err => {
                console.log(err);


            });
    }, []);


    return(
        <Background>
        <Title>{greeting}</Title>
        {
            loading && 
                <h3>Cargando</h3>
        }
        {
            !loading && 
            <React.Fragment>
                <ItemList addcart={addcart} Items={items}/>
                
            </React.Fragment>
        }
        
        
        </Background>
    );
}

export default ItemListContainer;