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
import styled from "styled-components";
import "./Purchase.css";

const Title = styled.h1`
`;

const FormWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const FormStyle = styled.form`
display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
`;

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
          <Title>Compra exitosa</Title>
          <Title>
            Tu codigo de seguimiento -{">"} {boleta}
          </Title>
        </React.Fragment>
      )}

      {!compraRealizada && (
        <React.Fragment>
          {cart.length !== 0 && (
            <React.Fragment>
              <Title>Ingresa tus datos para continuar tu compra.</Title>
              <FormWrapper >
                <FormStyle onSubmit={handleSubmit(onSubmit)}>

<div class="form__group field">
  <input type="text" class="form__field" placeholder="Nombre" {...register("First name", {
                      required: true,
                      maxLength: 80,
                    })} required />
  <label for="Nombre" class="form__label">Nombre</label>
</div>

                  <div class="form__group field">
  <input type="text" class="form__field" placeholder="Email" {...register("Email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })} required />
  <label for="Email" class="form__label">Email</label>
</div>

<div class="form__group field">
  <input type="text" class="form__field" placeholder="Celular" {...register("Mobile number", {
                      required: true,
                      minLength: 6,
                      maxLength: 12,
                    })} required />
  <label for="Celular" class="form__label">Celular</label>
</div>


                  <input style={{marginTop: "24px", width: "35%"}} type="submit" />
                </FormStyle>
              </FormWrapper>
            </React.Fragment>
          )}
          {cart.length === 0 && (
            <React.Fragment>
              <Title> Tu Carrito esta vacio!!</Title>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
export default Purchase;
