import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Nav from "./components/Nav";
import {Routes, Route} from "react-router-dom";
import Product from "./components/Product";

const data=[
    {
        id:1,
        name:"Fender"
    },
    {
        id:2,
        name:"Ibaneze"
    },
    {
        id:3,
        name:"Noir Wash"
    },
    {
        id:4,
        name:"Dermalogica"
    },
]

function App() {
    return (
        <div className="App">
            <Nav/>

            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/products"} element={<Products products={data}/>}/>
                <Route path={"/product/:id"} element={<Product products={data}/>}/>
                <Route path={"*"} element={
                    <div>Nothing is Here</div>
                }/>
            </Routes>


        </div>
    );
}

export default App;
