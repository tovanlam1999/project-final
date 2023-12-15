import axios from 'axios';
import ShoppingCart from '../../components-product/shoppingcart/ShoppingCart';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../component-page-cart/header/Header';
import Navbar from '../../component-page-cart/navbar/Navbar';


export default function Pagecart(props) {
   
   
    return (
        <div>
            <Header />
            <Navbar />
            <ShoppingCart  />
            <Footer />
        </div>
    );
}
