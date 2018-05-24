import React, { Component } from 'react'
import './App.css'
import Head from '../Head/Head'
import NavigationCategories from '../Head/NavigationCategories'
import ProductCarousel from '../ProductIntro/ProductCarousel';
import GeneralDivCat from '../ProductShow/GeneralDivCat';
import ProductList from '../ProductShow/ProductList';


class App extends Component {
  constructor() {
    super();
}

  render() {
    return (
      <div>
      <Head />
      <NavigationCategories />
      <ProductCarousel />
      <GeneralDivCat categorieDiv="Products" />
      <ProductList />
      </div>
    );
  }
}

export default App;
