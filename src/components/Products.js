import React from 'react';
import {Link} from "react-router-dom";

const Products =(props)=>{
    return(
        <div>
            <h1>Products</h1>
            {props.products.map((pr)=>
                 <Link to={'/product/'+pr.id} key={pr.id}>{pr.name}</Link>
            )}

        </div>
    )
}

export default Products;