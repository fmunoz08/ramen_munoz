import React from "react";
import {useState, useContext} from "react";
import { CartContext } from "../../CartContext";
import {addDoc, collection,doc,updateDoc} from "firebase/firestore"
import { db } from "../../firebaseConfig";
import moment from "moment";



function Purchase() {
    const [inputs, setInputs] = useState({});
    const [compraRealizada, setCompraRealizada] = useState(false);
    const [boleta, setBoleta] = useState("");
    const [cart,setCart,aux,setNumber, addItem,removeItem,clear,isInCart,updateNumber] =
    useContext(CartContext);

    let totalAmount = 0;
    cart.forEach(element => {
        totalAmount = element.price * element.quantity + totalAmount;
    });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({...values, [name]: value}))
  }

  const createItem = (carrito) => {
      let carro = [];
      let obj = {};
      carrito.forEach( item => {
            obj.id = item.fireId;
            obj.title = item.name;
            obj.price = item.price;
            obj.quantity = item.quantity;
             carro.push(obj)
      } )
      return carro;
  }

  createItem(cart);
  const handleSubmit = async (event) => {
    event.preventDefault();
    inputs["items"] = createItem(cart);
    inputs["total"] = totalAmount;
    inputs["fecha"] = moment().format();
    const docRef = await addDoc(collection(db, 'compras'),
    inputs);
    setBoleta(docRef.id);
    setCompraRealizada(true);
    clear();
  }


    return (     
        <React.Fragment>
            
            {
                compraRealizada &&
                <React.Fragment>
                    <h1>compra realizada satisfactoriamente con codigo de seguimiento -> {boleta}</h1>
                </React.Fragment>
            }

            {!compraRealizada && 
                <React.Fragment>
                    { cart.length !== 0 &&
            <React.Fragment>
            <h1>Primero dinos tus datos para poder conocerte!</h1>
            <div >
                <form style={{display: "flex", flexDirection: "column",alignItems:"center"}} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Juanito Perez" name="nombre"  value={inputs.nombre || ""} onChange={handleChange} />
                    <input type="number" placeholder="+569 12436589 " name="telefono" value={inputs.telefono || ""} onChange={handleChange} />
                    <input type="text" placeholder="mail@ejemplo.com" name="correo" value={inputs.correo || ""}  onChange={handleChange} />

                <button type="submit">Continuar</button>
            </form>
            </div>
            </React.Fragment>
            }
            { cart.length === 0 &&
                <React.Fragment>
                    <h1> Tu Carrito esta vacio!!</h1>
                </React.Fragment>
            }
                
                </React.Fragment>
            }
        </React.Fragment>
    );
}
export default Purchase;