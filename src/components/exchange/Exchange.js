import { Col, Container, Row } from 'reactstrap';
import './Exchange.css';

export default function Exchange() {
    return (
        <div className="Exchange">
            <Container>
                <div  className='Exchange_wrap'>
                    <Row className='Exchange_row'>


                        <Col className=" Exchange_item col-6">
                            <div className="Exchange_img">
                                <i class="fa-solid fa-truck-fast"></i>
                            </div>
                            <div className="Exchange_text">
                                <h4>Chuyển Phát Nhanh</h4>
                                <p>Miễn Phí Vận Chuyển</p>
                            </div>
                        </Col>
                        <Col className=" Exchange_item col-6">
                            <div className="Exchange_img">
                                <i class="fa-solid fa-box-open"></i>
                            </div>
                            <div className="Exchange_text">
                                <h4>Đổi Trả</h4>
                                <p>Chính sách trao đổi và hoàn trả dễ dàng</p>
                            </div>
                        </Col>
                        <Col className=" Exchange_item col-6">
                            <div className="Exchange_img">
                                <i class="fa-regular fa-star"></i>
                            </div>
                            <div className="Exchange_text">
                                <h4>Đánh Giá Và Xếp Hạng</h4>
                                <p>Xếp hạng khách hàng tốt nhất của chúng tôi 4.8</p>
                            </div>
                        </Col>
                        <Col className=" Exchange_item col-6">
                            <div className="Exchange_img">
                                <i class="fa-solid fa-phone-volume"></i>
                            </div>
                            <div className="Exchange_text">
                                <h4>Hỗ Trợ Khách Hàng</h4>
                                <p>034-261-0551</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
