import './ReviewClient.css';
import img1 from '../../img/about-img-1.jpg';
import img2 from '../../img/about-img-2.jpg';
import img3 from '../../img/about-img-3.jpg';
import { Col, Container, Row } from 'reactstrap';

export default function ReviewClient() {
    return (
        <div className='ReviewClient-wrap'>
            <Container className='ReviewClient_container'>
                <Row className='ReviewClient_row'>
                    <Col className="col-7 ReviewClient_col">
                        <div className="ReviewClient">
                            <div className="ReviewClient-item">
                                <div className="ReviewClient-icon">
                                    <i class="fa-regular fa-handshake"></i>
                                </div>
                                <div className="ReviewClient-desc">
                                    <span>20k</span>
                                    <p>Khách hàng vui vẻ</p>
                                </div>
                            </div>
                            <div className="ReviewClient-item">
                                <div className="ReviewClient-icon">
                                    <i class="fa-solid fa-user-graduate"></i>
                                </div>
                                <div className="ReviewClient-desc">
                                    <span>1k</span>
                                    <p>Chuyên gia</p>
                                </div>
                            </div>
                            <div className="ReviewClient-item">
                                <div className="ReviewClient-icon">
                                    <i class="fa-regular fa-heart"></i>
                                </div>
                                <div className="ReviewClient-desc">
                                    <span>550</span>
                                    <p>Thú cưng được nhận nuôi</p>
                                </div>
                            </div>
                            <div className="ReviewClient-item">
                                <div className="ReviewClient-icon">
                                    <i class="fa-solid fa-trophy"></i>
                                </div>
                                <div className="ReviewClient-desc">
                                    <span>90+</span>
                                    <p>Giải thưởng</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-5 ReviewClient_col">
                        <div className="ReviewClient_bottom-right">
                            <p>Người bạn đồng hành của thú cưng được giữ an toàn và được huấn luyện tốt</p>
                            <button>XEM TẤT CẢ</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='ReviewClient-animation-1'>
                <img src={img1}/>
            </div>
            <div className='ReviewClient-animation-2'>
                <img src={img2}/>
            </div>
            <div className='ReviewClient-animation-3'>
                <img src={img3}/>
            </div>
        </div>
    );
}
