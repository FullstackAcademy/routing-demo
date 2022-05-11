import React from "react";
import {useParams} from "react-router-dom";

const Product =(props)=>{

    const data = props.products;
    let params =useParams();


    return(
        <div>{data[params.id-1].name}</div>
    )
};

export default Product;