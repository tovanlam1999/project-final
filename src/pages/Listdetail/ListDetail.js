import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Breadcrumb from "../../components-product/breadcrumb/Breadcrumb";
import Sidebar from "../../components-product/sidebar/Sidebar";
export default function ListDetail() {
    return (
        <div className="ListDetail">
            <Header />
            <Navbar />
            <Breadcrumb/>
            <Sidebar/>
            <Footer />
        </div>
    )
}