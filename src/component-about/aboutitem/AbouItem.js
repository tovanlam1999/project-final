import './AbouItem.css';
import img from '../../img/about-img.jpg';
import img4 from '../../img/about-chan-cho-img.jpg';
import img1 from '../../img/animation-cho-img.jpg';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function AbouItem() {
    return (
        <div className="AbouItem">

            <Container>
                <Row>
                    <Col className="col-6 AbouItem_col">
                        <div className="_AbouItem_left">
                            <div className="AbouItem_left-img">
                                <img src={img} />
                            </div>
                        </div>
                    </Col>
                    <Col className="col-6 AbouItem_col-bottom">
                        
                        <div className="AbouItem_right">
                            <div className="AbouItem_right-content">
                                <h2>Niềm Đam Mê Của Chúng Tôi Là Cung Cấp Dịch Vụ Chăm Sóc Thú Cưng Vượt Trội</h2>
                                <p>
                                    Luôn có rất nhiều áp lực. Aenean ở nhiều mức độ tinh khiết khác nhau. Không cần
                                    thiết mãi mãi. Morbi mauris ưu tú, luôn là hạt giống bóng đá.
                                </p>
                            </div>
                            <div className="AbouItem_right-services">
                                <ul>
                                    <li>
                                        <div className="AbouItem_right-services-img">
                                            <img src={img4} />
                                        </div>
                                        <span>Hỗ trợ 24/7</span>
                                    </li>
                                    <li>
                                        <div className="AbouItem_right-services-img">
                                            <img src={img4} />
                                        </div>
                                        <span>Cơ sở taxi thú cưng</span>
                                    </li>
                                    <li>
                                        <div className="AbouItem_right-services-img">
                                            <img src={img4} />
                                        </div>
                                        <span>Đảm bảo lại tiền</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <div className="AbouItem_right-services-img">
                                            <img src={img4} />
                                        </div>
                                        <span>Chăm sóc cá nhân</span>
                                    </li>
                                    <li>
                                        <div className="AbouItem_right-services-img">
                                            <img src={img4} />
                                        </div>
                                        <span>Chuyển phát nhanh</span>
                                    </li>
                                    <li>
                                        <div className="AbouItem_right-services-img">
                                            <img src={img4} />
                                        </div>
                                        <span>Giá thấp nhất</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="AbouItem_right-contact">
                                <div className="AbouItem_right-contact-item">
                                    <div className="AbouItem_right-contact-icon">
                                        <i class="fa-solid fa-envelope-open-text"></i>
                                    </div>
                                    <div className="AbouItem_right-contact-desc">
                                        <p>Gửi email cho chúng tôi bất cứ lúc nào</p>
                                        <Link>tovanlam1999@gmail.com</Link>
                                    </div>
                                </div>
                                <div className="AbouItem_right-contact-item">
                                    <div className="AbouItem_right-contact-icon">
                                        <i class="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="AbouItem_right-contact-desc">
                                        <p>Gọi cho chúng tôi bất cứ lúc nào</p>
                                        <Link>034.2610.551</Link>
                                    </div>
                                </div>
                            </div>
                            <button>MUA SẮM NGAY BAY GIỜ</button>
                        </div>
                    </Col>
                </Row>
            </Container>
           
        </div>
    );
}
