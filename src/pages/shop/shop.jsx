import React from 'react';
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
    return (
        <div className='shop'>
            <div className='shopTitle'>
                <h1>Sneaker Shop</h1>
            </div>
            <div className='filter'>
                <a href=""><p>Women</p></a>
                <a href=""><p>Men</p></a>
                <a href=""><p>Kids</p></a>
            </div>
            <div className='products'>
                {" "}
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    )
}
