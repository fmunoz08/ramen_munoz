import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ItemCount from "./ItemCount";
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
                console.log(res.data);
                setTimeout(() => {
                    setItems(res.data.productos);
                    setLoading(false);
                }, 2000);
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
                <ItemList Items={items}/>
                <ItemCount stock={5} initial={1} onAdd={(number) => addcart(number) } />
            </React.Fragment>
        }
        
        
        </Background>
    );
}

export default ItemListContainer;