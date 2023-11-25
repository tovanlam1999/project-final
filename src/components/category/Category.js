import { Col, Container, Row } from 'reactstrap';
import Categorycat from '../../img/meo-anh-3.jpg';
import Categorydog from '../../img/cho-dom-img.jpg';
import Categoryvet from '../../img/vet-img.jpg';
import lineimg from '../../img/Line-heading.png';
import './Category.css';

export default function Category() {
    return (
        <div className="Category container">
            <div className="Category_wrap">
                <div className="border-animation active">
                    <h2 className='Category_h2'>Danh Mục Thú Cưng </h2>
                    <span className="border-top"></span>
                    <span className="border-right"></span>
                    <span className="border-bottom"></span>
                    <span className="border-left"></span>
                </div>
                <Container>
                <Row className='Category_row' >
                    <Col className="Category_item col-4">
                        <img src={Categorydog} />
                        <div className="Category_content">
                            <h3>Chó Đốm</h3>
                            <p>
                                Chăm sóc bệnh nhân là quan trọng, bệnh nhân sẽ được bệnh nhân theo dõi, nhưng nó sẽ xảy
                                ra cùng lúc với sự chuyển dạ và đau đớn.
                            </p>
                            <button className="Category_button .thumb-banner button">Mua Ngay</button>
                        </div>
                    </Col>
                    <Col className="Category_item col-4">
                        <img src={Categorycat} />
                        <div className="Category_content">
                            <h3>Angora Thổ Nhĩ Kỳ</h3>
                            <p>
                                Tortor lúc cười phim hoạt hình adipiscing. Tôi ghét việc dễ dàng bị cười nhạo như vậy.
                                Việc đình chỉ người đoạt giải đôi khi cũng không dẫn đến việc được tự do đi lại.
                            </p>
                            <button className="Category_button .thumb-banner button">Mua Ngay</button>
                        </div>
                    </Col>
                    <Col className="Category_item col-4 ">
                        <img src={Categoryvet} />
                        <div className="Category_content">
                            <h3>Vẹt Hồng</h3>
                            <p>
                                Điều đó sẽ không được quan tâm. Ôi chúa ơi, đó là một nơi tốt để ở. Người khuân vác đã
                                chăm sóc nó từ phía sau.
                            </p>
                            <button className="Category_button .thumb-banner button">Mua Ngay</button>
                        </div>
                    </Col>
                </Row>

                </Container>
            </div>
        </div>
    );
}
