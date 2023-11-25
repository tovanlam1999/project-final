import { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Container } from 'reactstrap';
import './NewProduct.css';
import { useParams } from 'react-router-dom';
import Product from '../../components/product/Product';

export default function NewProducts(props) {
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
        <div className="NewProducts">
            <div className="border-animation active">
                <h2> Những sản phẩm tương tự</h2>
                <span className="border-top"></span>
                <span className="border-right"></span>
                <span className="border-bottom"></span>
                <span className="border-left"></span>
            </div>
            <div className="NewProducts_bottom">
                
                <Container>
                    <Row className="NewProducts_row">
                        {data.map((item, index) => (
                            <Col className='NewProducts_col' sm="6" md="3">
                                <Product product={item} index={index}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <div className="NewProducts_prev prev-green">
                    <div className="prev-left">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                    <div className="prev-right">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
