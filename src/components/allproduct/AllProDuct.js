import { Container, Row, Col } from 'reactstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../product/Product';
import './AllProDuct.css';
export default function AllProDuct(props) {
    const [data, setData] = useState([]);

    const getData = () => {
        const api = 'https://653e66669e8bd3be29df402b.mockapi.io/dog-cat-food';
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
        <div className="AllProDuct">
            <div className="prev-green">
                <div className="prev-left">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div className="prev-right">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div className="AllProDuct_hedding">
                <div className="AllProDuct_border-animation col-4 active">
                    <h2 className='active'>Sản Phẩm Mới</h2>
                    <span className="AllProDuct_border-top active"></span>
                    <span className="AllProDuct_border-right active"></span>
                    <span className="AllProDuct_border-bottom active"></span>
                    <span className="AllProDuct_border-left active" ></span>
                </div>
                <div className="AllProDuct_border-animation col-4">
                    <h2>Bán Chạy Nhất</h2>
                    <span className="AllProDuct_border-top"></span>
                    <span className="AllProDuct_border-right"></span>
                    <span className="AllProDuct_border-bottom"></span>
                    <span className="AllProDuct_border-left"></span>
                </div>
                <div className="AllProDuct_border-animation col-4 ">
                    <h2>Sản Phẩm Top </h2>
                    <span className="AllProDuct_border-top"></span>
                    <span className="AllProDuct_border-right"></span>
                    <span className="AllProDuct_border-bottom"></span>
                    <span className="AllProDuct_border-left"></span>
                </div>
            </div>
            <div className="AllProDuct_body">
                <Container>
                    <Row className="AllProDuct_row">
                        {data.map((item, index) => (
                            <Col sm="6" md="3">
                                <Product product={item} index={index} />
                            </Col>
                        ))}
                    </Row>
                </Container>
                <div className='swiper'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}
