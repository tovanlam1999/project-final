import CheckOutItem from '../../component-checkout/checkout-item/CheckOutItem';
import Header from '../../component-checkout/header/Header';
import Navbar from '../../component-checkout/navbar/Navbar';
import Footer from '../../components/footer/Footer';

export default function Checkout() {
    return (
        <div>
            <Header />
            <Navbar />
            <CheckOutItem/>
            <Footer/>
        </div>
    );
}
