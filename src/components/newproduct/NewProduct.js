import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../product/Product';
import { Row, Col, Container } from 'reactstrap';
import './NewProduct.css';
import { useParams } from 'react-router-dom';

export default function NewProduct(props) {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const getData = () => {
        const api = `https://653e66669e8bd3be29df402b.mockapi.io/dog-cat-food/`;
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
        <div className="NewProduct">
            <div className="border-animation active">
                <h2>Danh Mục Thức ăn </h2>
                <span className="border-top"></span>
                <span className="border-right"></span>
                <span className="border-bottom"></span>
                <span className="border-left"></span>
            </div>
            <div className="NewProduct_bottom">
                <div className="prev-green">
                    <div className="prev-left">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                    <div className="prev-right">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
                <Container>
                    <Row className="NewProduct_row">
                        {data.map((item, index) => (
                            <Col sm="6" md="4">
                                <Product product={item} index={index} />
                            </Col>
                        ))}
                    </Row>
                </Container>
                <div className="swiper">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}
