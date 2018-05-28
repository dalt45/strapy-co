import React from 'react'
import { Image,Data,ProductCard,ImgDiv,ProductName,ProductPrice,ProductBrand } from "./ProductCard.styled";


const ProductSquare= ({price,name,image,brand}) => (
    <ProductCard>
        <ImgDiv>
        <Image src={image}/>
        </ImgDiv>
        <Data>
            <span><ProductName>{name}</ProductName></span>
            <span><ProductPrice>{price}</ProductPrice></span>
            <span><ProductBrand>{brand}</ProductBrand></span>
        </Data>
    </ProductCard>
    
);



export default ProductSquare