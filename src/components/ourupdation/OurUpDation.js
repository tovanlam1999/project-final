import { Container, Row, Col } from 'reactstrap';
import './OurUpDation.css';
import img from '../../img/ourdation-cat-2.jpg';

export default function OurUpDation() {
    return (
        <div className="OurUpDation">
             <div className="border-animation active">
                    <h2 className='OurUpDation_h2'>Cập Nhập Gần Đây </h2>
                    <span className="border-top"></span>
                    <span className="border-right"></span>
                    <span className="border-bottom"></span>
                    <span className="border-left"></span>
                </div>
            <Container>
                <Row>
                    <Col className="OurUpDation_col-5 col-5">
                        <div className="OurUpDation_left">
                            <div className="thumb">
                                <a></a>
                                <div className="thumb_date">
                                    <span>4-5-2023</span>
                                </div>
                            </div>
                            <div className="OurUpDation_entry-tags">
                                <i class="fa-solid fa-list-ul"></i>
                                <a>CAT,</a>
                                <a>DOG,</a>
                                <a>FOOD,</a>
                                <a>TOYS</a>
                            </div>
                            <h4>
                                <a>Những vấn đề sức khỏe mà người nuôi mèo nên biết</a>
                            </h4>
                            <p>
                                Núi non sẽ sinh ra và một chú chuột ngộ nghĩnh sẽ ra đời. Những chiếc quạt hay giá của
                                chiếc giường đều xứng đáng. Núi non sẽ sinh ra và một chú chuột ngộ nghĩnh sẽ ra đời.{' '}
                                Những chiếc quạt hay giá của chiếc giường đều xứng đáng. Núi non sẽ sinh ra và một chú
                                chuột ngộ nghĩnh sẽ ra đời. Những chiếc quạt hay giá của chiếc giường đều xứng đáng.
                            </p>
                            <button>ĐỌC THÊM</button>
                        </div>
                    </Col>
                    <Col className="OurUpDation_col-7 col-7">
                        <div className="OurUpDation_right">
                            <Row className="OurUpDation_row">
                                <Col className="OurUpDation_img-right col-6">
                                    <a></a>
                                    <div className="thumb_date">
                                        <span>12-5-2023</span>
                                    </div>
                                </Col>
                                <Col className="OurUpDation_content-right col-5">
                                    <div className="OurUpDation_entry-tags">
                                        <i class="fa-solid fa-list-ul"></i>
                                        <a>CAT,</a>
                                        <a>DOG,</a>
                                        <a>FOOD,</a>
                                        <a>TOYS</a>
                                    </div>
                                    <h4>
                                        <a>Mẹo giúp mèo luôn mát mẻ và khỏe mạnh</a>
                                    </h4>
                                    <p>
                                        Trên thực tế, tài xế xe tải hiện đang làm điều đó. Phần lớn dân số đang sống
                                        trong tuổi già buồn bã.
                                    </p>
                                    <button>ĐỌC THÊM</button>
                                    
                                </Col>
                                <Col className="OurUpDation_img-bottom col-6">
                                    <a></a>
                                    <div className="thumb_date">
                                        <span>12-5-2023</span>
                                    </div>
                                </Col>
                                <Col className="OurUpDation_content-bottom col-5">
                                    <div className="OurUpDation_entry-tags">
                                        <i class="fa-solid fa-list-ul"></i>
                                        <a>CAT,</a>
                                        <a>DOG,</a>
                                        <a>FOOD,</a>
                                        <a>TOYS</a>
                                    </div>
                                    <h4>
                                        <a>Tiêu chuẩn và hướng dẫn tiêm phòng cho mèo</a>
                                    </h4>
                                    <p>
                                        Trên thực tế, tài xế xe tải hiện đang làm điều đó. Phần lớn dân số đang sống
                                        trong tuổi già buồn bã.
                                    </p>
                                    <button>ĐỌC THÊM</button>
                                    
                                </Col>
                            </Row>
                            {/* <div className="OurUpDation_sub-img-cat">
                                <img src={img}/>
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
