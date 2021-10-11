import axios from "axios";

const url = `http://localhost:9000`;

export const GetData = () => {
    return( axios.get(
        `${url}/getData`
    ));
}

export const GetProducto = (number) => {
    return( axios.get(
        `${url}/getProducto`
    ));
}