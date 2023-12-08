import AbouItem from '../../component-about/aboutitem/AbouItem';
import ReviewClient from '../../component-about/reviewclient/ReviewClient';
import ServicesBody from '../../component-about/servicesbody/ServicesBody';
import TakeCare from '../../component-about/takecare/TakeCare';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navbar from "../../components-product/navbar/Navbar";
import OurUpDation from '../../components/ourupdation/OurUpDation';
import PuppyFood from '../../components/puppyfood/PuppyFood';
import Trainers from '../../components/trainers/Trainers';

export default function About() {
    return (
        <div className="About">
            <Header />
            <Navbar />
            
            <AbouItem/>
            <ReviewClient/>
            <ServicesBody/>
            <TakeCare/>
            <Trainers/>
            <OurUpDation/>
            <PuppyFood/>
            <Footer />
        </div>
    );
}
