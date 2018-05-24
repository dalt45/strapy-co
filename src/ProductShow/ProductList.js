import React, {Component} from 'react'
import ProductSquare from './ProductCard'
import {Container} from "./ProductList.styled";

const productData = require('./product.json')


class ProductList extends Component{

    constructor() {
        super();
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                data : productData
            })
        },3000)
    }
    

    render(){

        if (this.state.data.length===0){
            return <div> Loading.....</div>
        }

        return(
            <Container>
                {this.state.data.map(product=>
                    (<ProductSquare
                        name={ product.name}
                        image={product.imgUrl}
                        price={"$"+product.price}
                        brand={product.brand}
                    />)
                )}
            </Container>
        )
    }
}

export default ProductList