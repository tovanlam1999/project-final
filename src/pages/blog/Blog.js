import axios from 'axios';
import BlogBody from '../../component-blog/blogbody/BlogBody';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components-product/breadcrumb/Breadcrumb';

export default function Blog() {
    const [animal, setAnimal] = useState();
    const { id } = useParams();

    const getAnimal = () => {
        const api = `https://6560124683aba11d99d02b5c.mockapi.io/animalBlog`;

        axios
            .get(api)
            .then((res) => {
                setAnimal(res.data);
            })
            .catch((Error) => {
                console.log(Error);
            });
    };

    useEffect(() => {
        getAnimal();
    }, []);

    return (
        <div className="Blog">
            <Header />
            <Navbar />
            <Breadcrumb/>
            <BlogBody animal = {animal} />
            <Footer />
        </div>
    );
}
