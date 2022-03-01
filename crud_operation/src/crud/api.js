import axios from "axios";

export const getNames = async() => {
    return await axios.get(`${process.env.REACT_APP_API}`);
}