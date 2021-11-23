/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { CartContext } from "../../CartContext";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import moment from "moment";
import { useForm } from "react-hook-form";

function Purchase() {
  const [inputs] = useState({});
  const {
    register, handleSubmit,
    formState: { errors },
  } = useForm();
  const [compraRealizada, setCompraRealizada] = useState(false);
  const [boleta, setBoleta] = useState("");

  const [
    cart,
    setCart,
    aux,
    setNumber,
    addItem,
    removeItem,
    clear,
    isInCart,
    updateNumber,
  ] = useContext(CartContext);

  let totalAmount = 0;
  cart.forEach((element) => {
    totalAmount = element.price * element.quantity + totalAmount;
  });


  const createItem = (carrito) => {
    let carro = [];
    let obj = {};
    carrito.forEach((item) => {
      obj.id = item.fireId;
      obj.title = item.name;
      obj.price = item.price;
      obj.quantity = item.quantity;
      carro.push(obj);
    });
    return carro;
  };


  const updateStock = async (input) => {
    const requestData = async (id, stock) => {
      const q = query(collection(db, "productos"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((document) => {
        if (document.id === id) {
          const itemRef = doc(db, "productos", document.id);
          updateDoc(itemRef, {
            stock: document.data().stock - stock,
          });
        }
      });
    };
    // loop this and update stock
    input["items"].forEach((item) => {
      requestData(item.id, item.quantity);
    });
  };

  const onSubmit = async (data) => {console.log(data)
    inputs["user"] = data;
    inputs["items"] = createItem(cart);
    inputs["total"] = totalAmount;
    inputs["fecha"] = moment().format();
    console.log(inputs);
    const docRef = await addDoc(collection(db, "compras"), inputs);
    updateStock(inputs);
    setBoleta(docRef.id);
    setCompraRealizada(true);
    clear();};

  return (
    <React.Fragment>
      {compraRealizada && (
        <React.Fragment>
          <h1>Compra exitosa</h1>
          <h1>
            Tu codigo de seguimiento -{">"} {boleta}
          </h1>
        </React.Fragment>
      )}

      {!compraRealizada && (
        <React.Fragment>
          {cart.length !== 0 && (
            <React.Fragment>
              <h1>Ingresa tus datos para continuar tu compra.</h1>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    placeholder="First name"
                    {...register("First name", {
                      required: true,
                      maxLength: 80,
                    })}
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("Email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    {...register("Mobile number", {
                      required: true,
                      minLength: 6,
                      maxLength: 12,
                    })}
                  />

                  <input type="submit" />
                </form>
              </div>
            </React.Fragment>
          )}
          {cart.length === 0 && (
            <React.Fragment>
              <h1> Tu Carrito esta vacio!!</h1>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
export default Purchase;
