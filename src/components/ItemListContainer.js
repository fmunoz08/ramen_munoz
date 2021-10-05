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

    const DATA = { productos: [
        {id:1,title:"ramen",description:"saludos",price:1000,stock:5,pictureUrl:"https://www.elmundoeats.com/wp-content/uploads/2021/02/FP-Quick-30-minutes-chicken-ramen.jpg"},
        {id:2,title:"ramen",description:"saludos",price:1000,stock:5,pictureUrl:"https://www.elmundoeats.com/wp-content/uploads/2021/02/FP-Quick-30-minutes-chicken-ramen.jpg"},
        {id:3,title:"ramen",description:"saludos",price:1000,stock:5,pictureUrl:"https://www.elmundoeats.com/wp-content/uploads/2021/02/FP-Quick-30-minutes-chicken-ramen.jpg"},
    ]};

    
    useEffect( () => {
        
        setTimeout(() => {
            setItems(DATA.productos);
            setLoading(false);
        }, 2000);
    
        // GetData()
        //     .then(res => {
                
        //     })
        //     .catch(err => {
        //         console.log(DATA);
        //     });
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