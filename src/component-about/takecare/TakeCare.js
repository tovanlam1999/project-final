import { Col, Container, Row } from 'reactstrap';
import './TakeCare.css';
import img from '../../img/takecare-img.jpg';
import img1 from '../../img/takecare-img-1.jpg';
import img2 from '../../img/takecare-img-2.jpg';
import img3 from '../../img/takecare-overlay-img.jpg';
export default function TakeCare() {
    return (
        <div className="TakeCare">
            <div className="TakeCare_headding">
                <h6>LIÊN LẠC</h6>
                <h2 className="TakeCare_headding-h2">Chuyên Gia Chăm Sóc</h2>
            </div>
            <Container>
                <Row>
                    <Col  className='TakeCare_col'>
                        <div className="TakeCare_item">
                            <div className="TakeCare_Thumb">
                                <img src={img} />
                            </div>
                            <div className="TakeCare_content">
                                <h3>Himloton</h3>
                                <p>NGƯỜI HUẤN LUYỆN THÚ CƯNG</p>
                                <div className="TakeCare_social">
                                    <a>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a>
                                        <i class="fa-brands fa-twitter"></i>
                                    </a>
                                    <a>
                                        <i class="fa-brands fa-youtube"></i>
                                    </a>
                                    <a>
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='TakeCare_col'>
                        <div className="TakeCare_item">
                            <div className="TakeCare_Thumb">
                                <img src={img1} />
                            </div>
                            <div className="TakeCare_content">
                                <h3>Anne Dasia</h3>
                                <p>NGƯỜI HUẤN LUYỆN THÚ CƯNG</p>
                                <div className="TakeCare_social">
                                    <a>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a>
                                        <i class="fa-brands fa-twitter"></i>
                                    </a>
                                    <a>
                                        <i class="fa-brands fa-youtube"></i>
                                    </a>
                                    <a>
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='TakeCare_col'>
                        <div className="TakeCare_item">
                            <div className="TakeCare_Thumb">
                                <img src={img2} />
                            </div>
                            <div className="TakeCare_content">
                                <h3>E-Li-Sê</h3>
                                <p>NGƯỜI HUẤN LUYỆN THÚ CƯNG</p>
                                <div className="TakeCare_social">
                                    <a>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a>
                                        <i class="fa-brands fa-twitter"></i>
                                    </a>
                                    <a>
                                        <i class="fa-brands fa-youtube"></i>
                                    </a>
                                    <a>
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <button className="TakeCare_btn">MUA SẮM NGAY BÂY GIỜ</button>
            </Container>
        </div>
    );
}
