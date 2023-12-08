import img1 from '../../img/img-sale.jpg';
import './Sale.css';
import { Row, Col, Container } from 'reactstrap';

export default function Sale() {
    return (
        <div className="Sale_wrap container">
            <Row className="Sale">
                <Col className=" col-6 Sale_left">
                    <div className="border-animation active">
                        <h2 className="Sale_h2">Ưu đãi hôm nay</h2>
                        <span className="border-top"></span>
                        <span className="border-right"></span>
                        <span className="border-bottom"></span>
                        <span className="border-left"></span>
                    </div>
                    <div className="Sale_content">
                        <h3>Que nhai mềm</h3>
                        <div className="review">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p>
                            Tại thời điểm cuối cùng của tôi, thời gian không thể thực hiện được là nulla malesuada
                            pellentesque elit.{' '}
                        </p>
                        <div className="Sale_price">
                            150.000đ
                            <span className="Sale_sub-price">200.000đ</span>
                        </div>
                        <div className="Sale_button">
                            <button>
                                <i class="fa-solid fa-cart-shopping"></i>Thêm vào giỏ hàng
                            </button>
                            <button>
                                <i class="fa-solid fa-heart"></i>Danh sách yêu thích
                            </button>
                        </div>
                    </div>
                </Col>
                <Col className=" col-8 Sale_img">
                    <img src={img1} />
                </Col>
            </Row>
        </div>
    );
}
