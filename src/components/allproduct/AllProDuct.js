import { Container, Row, Col } from 'reactstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../product/Product';
import './AllProDuct.css';
export default function AllProDuct(props) {
    const [data, setData] = useState([]);
    const [activeCol, setActiveCol] = useState(0);
    const [activeCategory, setActiveCategory] = useState(0);
    const [filteredData, setFilteredData] = useState([]);
    const categories = [{ name: 'Sản Phẩm Mới' }, { name: 'Bán Chạy Nhất' }, { name: 'Sản Phẩm Top' }];
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

    const prevCol = () => {
        setActiveCol((prevCol) => (prevCol - 1 + data.length) % data.length);
    };

    const nextCol = () => {
        setActiveCol((prevCol) => (prevCol + 1) % data.length);
    };
    const handleCategoryClick = (index) => {
        setActiveCategory(index);
    };

    useEffect(() => {
        if (activeCategory == 1) {
            const filteredProducts = data.filter((item) => item.sale >= 30);
            setFilteredData(filteredProducts);
        } else if (activeCategory == 2) {
            const filteredProducts = data.filter((item) => item.revew >= 60);
            setFilteredData(filteredProducts);
        } else {
            setFilteredData(data);
        }
    }, [activeCategory, data]);
    console.log(filteredData);
    return (
        <div className="AllProDuct">
            <div className="AllProDuct_hedding">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className={`AllProDuct_border-animation col-4 ${activeCategory === index ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(index)}
                    >
                        <h2 className={activeCategory === index ? 'active' : ''}>{category.name}</h2>
                        <span className={`AllProDuct_border-top ${activeCategory === index ? 'active' : ''}`}></span>
                        <span className={`AllProDuct_border-right ${activeCategory === index ? 'active' : ''}`}></span>
                        <span className={`AllProDuct_border-bottom ${activeCategory === index ? 'active' : ''}`}></span>
                        <span className={`AllProDuct_border-left ${activeCategory === index ? 'active' : ''}`}></span>
                    </div>
                ))}
            </div>
            <div className="AllProDuct_body">
                <Container className="AllProDuct_body-container">
                    <Row className="AllProDuct_row" style={{ transform: `translateX(-${activeCol * 25}%)` }}>
                        {filteredData.map((item, index) => (
                            <Col sm="6" md="3">
                                <Product product={item} index={index} />
                            </Col>
                        ))}
                    </Row>
                </Container>
                <div className="prev-green">
                    <div className="prev-left" onClick={prevCol}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                    <div className="prev-right" onClick={nextCol}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
