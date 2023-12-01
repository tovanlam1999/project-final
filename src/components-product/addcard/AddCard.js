import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';
import './AddCard.css';
export default function AddCard(props) {
    const { handle_delete, data } = props;
    const [qualiti, setQualiti] = useState(data.qty);
    
    const handle_calc = (item) => {
        if (item === 'minus' && qualiti > 1) {
            setQualiti(qualiti - 1);
        } else if (item === 'plus') {
            setQualiti(qualiti + 1);

            localStorage.setItem('price', JSON.stringify(data.price));
        }
    };
    const calculateTotal = () => {
        // Kiểm tra xem data và data.price có tồn tại không
        if (data && data.price) {
            // Chuyển đổi data.price thành số trước khi nhân
            const priceAsNumber = parseFloat(data.price.replace(',', ''));

            // Nhân với số lượng qualiti và định dạng số với dấu phẩy
            const formattedTotal = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                priceAsNumber * qualiti
            );

            return formattedTotal;
        } else {
            return ''; // Trả về một giá trị mặc định hoặc có thể là null tùy thuộc vào yêu cầu của bạn
        }
    };

   
    return (
        <div className="AddCard">
            <Row className="Modal_card-row">
                <Col className="modal_content-card col-3">
                    <img src={data ? data.img : ''} alt={data ? data.title : ''} />
                </Col>
                <Col className="modal_content-card mid col-7">
                    <h3>{data ? data.title : ''}</h3>
                    <div className="modal_content-desc-mid">
                        <span>3kg/</span>
                        <span>Chó/</span>
                        <span>Trung bình</span>
                    </div>
                    <div>
                        <span>{calculateTotal()}</span>
                        <span className="price-cost">{data ? data.price : ''}</span>
                    </div>
                    <div className="ListProduct_content-item-number">
                        <button onClick={() => handle_calc('minus')}>-</button>
                        <input type="text" value={qualiti} readOnly />
                        <button onClick={() => handle_calc('plus')}>+</button>
                    </div>
                </Col>
                <Col className="modal_content-clear col-2">
                    <button onClick={() => handle_delete(data.id)}>X</button>
                </Col>
            </Row>
        </div>
    );
}
