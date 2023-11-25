import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';

export default function AddCard(props) {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const [value, setValue] = useState(1);
    const [totalPrice, setTotalPrice] = useState(data.price);
    
    console.log(totalPrice)
    const getData = () => {
        const api = `https://653e66669e8bd3be29df402b.mockapi.io/dog-cat-food/${id}`;
        console.log(api);
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

    const handlePlusOrMinus = (calculate) => {
        if (calculate === 'minus' && value > 0) {
            setValue(value - 1);
        } else if (calculate === 'plus') {
            setValue(value + 1);
            
        }
    };
    const calcTotal = (row) => {
        const price = parseFloat(row.price);
        const quantity = parseInt(value, 10);

        if (!isNaN(price) && !isNaN(quantity)) {
            return price * quantity;
        }

        return 0;
    };

    const calcAllTotal = () => {
        setTotalPrice(calcTotal(data));
    };

    useEffect(() => {
        calcAllTotal();
    }, [value, data]);

    return (
        <div className="AddCard">
            <Row className="Modal_card-row">
                <Col className="modal_content-card col-3">
                    <img src={data ? data.img : ''} />
                </Col>
                <Col className="modal_content-card mid  col-7">
                    <h3>{data ? data.title : ''}</h3>
                    <div className="modal_content-desc-mid">
                        <span>3kg/</span>
                        <span>Chó/</span>
                        <span>Trung bình</span>
                    </div>
                    <div>
                        <span>{data ? data.price : ''}</span>
                        <span className="price-cost">{data ? data.price : ''}</span>
                    </div>
                    <div className="ListProduct_content-item-number">
                        <button onClick={() => handlePlusOrMinus('minus')}>-</button>
                        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                        <button onClick={() => handlePlusOrMinus('plus')}>+</button>
                    </div>
                </Col>
                <Col className="modal_content-clear col-2">
                    <button>X</button>
                </Col>
            </Row>
            <div className="Modal_total">
                <p>Tổng Cộng</p>
                <span className="Modal_total-price">{totalPrice + ",000đ"}</span>
            </div>
        </div>
    );
}
