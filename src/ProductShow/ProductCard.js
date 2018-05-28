import React from 'react'
import { Image,Data,ProductCard } from "./ProductCard.styled";

const ProductSquare= ({price,name,image,brand}) => (
    <ProductCard>
        <Image src={image}/>
        <Data>
            <span><p>{name}</p></span>
            <span><p>{price}</p></span>
            <span>{brand}</span>
        </Data>
    </ProductCard>
);



export default ProductSquare