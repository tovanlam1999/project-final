

import ServicesBody from "../../component-services/servicesbody/ServicesBody";
import Navbar from "../../components-product/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import PuppyFood from "../../components/puppyfood/PuppyFood";




export default function Services () { 
    return (
        <div className="Services">
            <Header/>
            <Navbar/>
            <ServicesBody/>
            <PuppyFood/>
            <Footer/>
        </div>
    )
}