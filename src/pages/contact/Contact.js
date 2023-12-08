import BookYourSlot from "../../component-contact/bookyourslot/BookYourSlot";
import Navbar from "../../components-product/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import OurPartNer from "../../components/ourpartner/OurPartNer";




export default function Contact () {
    return (
        <div>
            <Header/>
            <Navbar/>
            <BookYourSlot/>
            <OurPartNer/>
            <Footer/>
        </div>
    )
}