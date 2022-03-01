import React, { useState, useEffect }  from "react";
import {toast} from "react-toastify";
import { getNames } from "./api";

const Crud = () => {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [names, setNames] =useState([]);

    useEffect(() => {
        loadNames();
    }, []);
    const loadNames = () => getNames().then((name) => setNames(name.data));
};


export default Crud;