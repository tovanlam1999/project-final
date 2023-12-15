import Header from '../../components/header/Header';

import Footer from '../../components/footer/Footer';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ListProduct from '../../components-product/listproduct/ListProduct';
import NewProducts from '../../components-product/newproduct/NewProduct';
import Navbar from '../../component-product-detail/navbar/Navbar';

export default function ProductDetail(props) {
    const [data, setData] = useState();
    const { id } = useParams();
    const getData = () => {
        const api = `https://653e66669e8bd3be29df402b.mockapi.io/dog-cat-food/${id}`;
        axios
            .get(api)
            .then((res) => {
                setData(res.data);
            })
            .catch((Error) => {
                console.log(Error);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="ProductDetail">
            <Header data={data} />
            <Navbar data={data} />
            <ListProduct data={data} />
            <NewProducts />
            <Footer />
        </div>
    );
}
