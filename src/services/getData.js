import axios from "axios";

const url = `http://localhost:9000`;

export const GetData = () => {
    return( axios.get(
        `${url}/getData`
    ));
}