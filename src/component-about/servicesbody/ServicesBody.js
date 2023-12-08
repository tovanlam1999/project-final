import './ServicesBody.css';
import img from '../../img/services-img.jpg';
import img1 from '../../img/services-img-1.jpg';
import { Col, Container, Row } from 'reactstrap';
import image from '../../img/services-img-2.jpg';
import image1 from '../../img/services-img-3.jpg';
import image2 from '../../img/services-img-4.jpg';
import image3 from '../../img/services-img-5.jpg';
import image4 from '../../img/services-img-6.jpg';
import image5 from '../../img/services-img-7.jpg';
import image6 from '../../img/services-img-8.jpg';
import image7 from '../../img/services-img-9.jpg';
export default function ServicesBody() {
    const images = [
        {
            id: 1,
            img: image,
            name: 'Salon thú cưng',
            desc: 'Mauris cực kỳ eros trong quá trình học đại học hàng loạt Dignissim diam quis enim lobortis scelerisque.',
        },
        {
            id: 2,
            img: image1,
            name: 'Chăm sóc thú cưng',
            desc: 'Aenean hoặc elit scelerisque mauris pellentesque pulvinar pellentesque cư dân.',
        },
        {
            id: 3,
            img: image2,
            name: 'Huấn luyện thú cưng',
            desc: 'Aenean hoặc elit scelerisque mauris pellentesque pulvinar pellentesque cư dân.',
        },
        {
            id: 4,
            img: image3,
            name: 'Phương pháp điều trị tốt nhất',
            desc: 'Tuổi già buồn bã và những đứa cháu, nạn đói Maledau và những nhu cầu xấu xí của trái đất.',
        },
        {
            id: 5,
            img: image4,
            name: 'Thực phẩm dinh dưỡng',
            desc: 'Đói khát và cái ác cần đến, nhưng thời gian là chiếc bình và ống đựng tên cũng là thời gian.',
        },
        {
            id: 6,
            img: image5,
            name: 'Thức ăn cho chó',
            desc: 'Tôi xứng đáng với giá một viên sôcôla cho cổ họng của mình.',
        },
        {
            id: 7,
            img: image6,
            name: 'Huấn luyện mèo',
            desc: 'Mauris cực kỳ eros trong quá trình học đại học hàng loạt Dignissim diam quis enim lobortis scelerisque.',
        },
        {
            id: 8,
            img: image7,
            name: 'Thói quen lành mạnh',
            desc: 'Amet tạo điều kiện tuyệt vời ngay cả trong thời kỳ lâm sàng của yếu tố eu loborti nibh loborti.',
        },
    ];
    return (
        <div className="ServicesBody">
            <div className="ServicesBody_top">
                <Container>
                    <Row>
                        <Col className="col-6 ServicesBody_top-col">
                            <div className="ServicesBody_top-thumb">
                                <div className="">
                                    <img src={img} />
                                </div>
                                <div className="ServicesBody_top-img">
                                    <img src={img1} />
                                </div>
                                <div className="ServicesBody_top-animation">
                                    <div className="ServicesBody_top-animation-one">
                                        <span>Dịch vụ</span>
                                        <p>Tốt Nhất</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-6 ServicesBody_top-col">
                            <div className="ServicesBody_top-content">
                                <div className="ServicesBody_top-content-headding">
                                    <h6>Chúng tôi là lớn nhất</h6>
                                    <h3>Nhà bán buôn được cấp phép</h3>
                                    <p>
                                        Chỉ là vấn đề thời gian để bọn trẻ khỏi bệnh tật. Điều quan trọng nhất của căn
                                        bệnh này là bạn có thể thoải mái dành thời gian cho con cái. Yếu tố quan trọng
                                        nhất của gia đình là giá cả. Không có đứa trẻ thuần khiết hay y tế
                                    </p>
                                </div>
                                <div className="ServicesBody_top-content-open">
                                    <div className="ServicesBody_open-door">
                                        <h4>Giờ mở cửa</h4>
                                        <div>
                                            <span>Thứ 2 - Thứ 6: 08:30 - 20:00</span>
                                            <span>Thứ 7 - Chủ Nhật: 09:30 - 21:30</span>
                                        </div>
                                    </div>
                                    <div className="ServicesBody_open-door">
                                        <h4>Gửi thư cho chúng tôi</h4>
                                        <div>
                                            <span>tovanlam1999@gmail.com</span>
                                            <span>034-2610-551</span>
                                        </div>
                                    </div>
                                </div>
                                <button>ĐẶT BÂY GIỜ</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </div>
    );
}
