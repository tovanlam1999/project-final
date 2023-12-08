import Header from "../../components/header/Header";
import Navbar from "../../components-product/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import Sidebar from "../../components-product/sidebar/Sidebar";
export default function ListDetail() {
    return (
        <div className="ListDetail">
            <Header />
            <Navbar />
            
            <Sidebar/>
            <Footer />
        </div>
    )
}