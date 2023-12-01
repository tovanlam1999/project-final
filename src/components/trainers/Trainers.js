import { Col, Container, Row } from 'reactstrap';
import './Trainers.css';
import img from '../../img/banner-animation.jpg';
import img1 from '../../img/img-social.jpg';
import img2 from '../../img/cup-img.jpg';
import avata from '../../img/avata.jpg';
import avata1 from '../../img/avata-1.jpg';
import avata2 from '../../img/avata-2.jpg';
import img4 from '../../img/animation-img-2.jpg';
import { useState } from 'react';
export default function Trainers() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevRightClick = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Đổi 3 thành số lượng phần tử trong mảng
        
    };

    const handlePrevLeftClick = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Đổi 3 thành số lượng phần tử trong mảng
    };

    return (
        <div className="Trainers">
            <Container>
                <Row>
                    <Col className="Trainers_left">
                        <div className="Trainers_img">
                            <img src={img} />
                            <div className="animation_img">
                                <img src={img4} />
                            </div>
                        </div>
                        <div className="Trainers_follow">
                            <img src={img1} />
                        </div>

                        <div className="Trainers_cup">
                            <div className="Trainers_sub-img">
                                <img src={img2} />
                            </div>
                            <a className="Trainers_sub-content">
                                <p>Chuyên Gia Chăm Sóc Động Vật</p>
                                <span>HỌC VIỆN ÁC CHỦ BÀI</span>
                            </a>
                        </div>
                    </Col>
                    <Col className="Trainers_right">
                        <div className="border-animation active">
                            <h2 className="Trainers_h2">Gặp gỡ những người huấn luyện chó giỏi nhất của chúng tôi</h2>
                            <span className="border-top"></span>
                            <span className="border-right"></span>
                            <span className="border-bottom"></span>
                            <span className="border-left"></span>
                        </div>
                        <div className="Trainers_content">
                            <div className="Trainers_content-item-wrap">
                                <div className={`Trainers_content-item ${activeIndex === 0 ? 'active' : ''}`}>
                                    <p>
                                        Các thành viên trong nhóm thậm chí còn không quan tâm. Ultricies buồn vì không
                                        có xe tải nào cả. Felis cho đến khi và ghét trẻ con. Miễn là giá nâu là thứ anh
                                        ta muốn thay thế.Thật dễ dàng để trang trí bức tranh biếm họa về bệnh viện bằng
                                        những mũi tên và một cuộc sống đầy hận thù. Bây giờ người nói là tác giả của
                                        chiếc bình.Nó cần rất nhiều đau đớn, nhưng bản thân bộ phim hoạt hình giờ đây đã
                                        là một chiếc xe tải để uống rượu.Giá một chiếc giường nhiều như thời đó trong
                                        đời. Tôi ghét thời gian dành cho các thử nghiệm lâm sàng.
                                    </p>
                                    <div className="Trainers_bottom">
                                        <div className="Trainers_img">
                                            <img src={avata} />
                                        </div>
                                        <div className="Trainers_desc">
                                            <h3>Tiến Sĩ Jamine</h3>
                                            <span>Bác SĨ Thú Cưng</span>
                                        </div>
                                        <div className="review">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className={`Trainers_content-item ${activeIndex === 1 ? 'active' : ''}`}>
                                    <p>
                                        Các thành viên trong nhóm thậm chí còn không quan tâm. Ultricies buồn vì không
                                        có xe tải nào cả. Felis cho đến khi và ghét trẻ con.Miễn là giá nâu là thứ anh
                                        ta muốn thay thế. Thật dễ dàng để trang trí bức tranh biếm họa về bệnh viện bằng
                                        những mũi tên và một cuộc sống đầy hận thù.Bây giờ người nói là tác giả của
                                        chiếc bình. Nó cần rất nhiều đau đớn, nhưng bản thân bộ phim hoạt hình giờ đây
                                        đã là một chiếc xe tải để uống rượu.Giá một chiếc giường nhiều như thời đó trong
                                        đời. Tôi ghét thời gian dành cho các thử nghiệm lâm sàng.
                                    </p>

                                    <div className="Trainers_bottom">
                                        <div className="Trainers_img">
                                            <img src={avata1} />
                                        </div>
                                        <div className="Trainers_desc">
                                            <h3>Tiến Sĩ Manazila</h3>
                                            <span>Chuyên Gia Động Vật</span>
                                        </div>
                                        <div className="review">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className={`Trainers_content-item ${activeIndex === 2 ? 'active' : ''}`}>
                                    <p>
                                        Tôi ghét thời gian dành cho các thử nghiệm lâm sàng.Các thành viên trong nhóm
                                        thậm chí còn không quan tâm.Ultricies buồn vì không có xe tải nào cả. Felis cho
                                        đến khi và ghét trẻ con. Miễn là giá nâu là thứ anh ta muốn thay thế.Thật dễ
                                        dàng để trang trí bức tranh biếm họa về bệnh viện bằng những mũi tên và một cuộc
                                        sống đầy hận thù.Bây giờ người nói là tác giả của chiếc bình. Nó cần rất nhiều
                                        đau đớn, nhưng bản thân bộ phim hoạt hình giờ đây đã là một chiếc xe tải để uống
                                        rượu. Giá một chiếc giường nhiều như thời đó trong đời.
                                    </p>
                                    <div className="Trainers_bottom">
                                        <div className="Trainers_img">
                                            <img src={avata2} />
                                        </div>
                                        <div className="Trainers_desc">
                                            <h3>Tiến Sĩ A.S.Joe</h3>
                                            <span>Chuyên Gia Động Vật Chó</span>
                                        </div>
                                        <div className="review">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Trainers_prev">
                                <div className="prev-left " onClick={handlePrevLeftClick}>
                                    <i class="fa-solid fa-chevron-left"></i>
                                </div>
                                <div className="prev-right " onClick={handlePrevRightClick}>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
