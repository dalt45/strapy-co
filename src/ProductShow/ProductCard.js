import React from 'react'
import { Image,Data,ProductCard } from "./ProductCard.styled";

const ProductSquare= ({price,name,image,brand}) => (
    <ProductCard>
        <Image src={image}/>
        <Data>
            <span><h1>{name}</h1></span>
            <span><h1>{price}</h1></span>
            <span> {brand}</span>
        </Data>
    </ProductCard>
);



export default ProductSquare