import { Container, Row, Col } from 'reactstrap';
import img from '../../img/logo-partner.jpg';
import img1 from '../../img/logo-partner-1.jpg';
import img2 from '../../img/logo-partner-2.jpg';
import img3 from '../../img/logo-partner-3.jpg';
import img4 from '../../img/logo-partner-4.jpg';
import "./OurPartNer.css"


export default function OurPartNer() {
    return (
        <div className="OurPartNer">
             <div className="border-animation active">
                <h2>Đối Tác Tốt Nhất Của Chúng Tôi</h2>
                <span className="border-top"></span>
                <span className="border-right"></span>
                <span className="border-bottom"></span>
                <span className="border-left"></span>
            </div>
            <Container className='OurPartNer_container' >
                <Row className='OurPartNer_row'>
                    <Col className='OurPartNer_img'>
                        <a>
                            <img src={img} />
                        </a>
                    </Col>
                    <Col className='OurPartNer_img'>
                        <a>
                            <img src={img1} />
                        </a>
                    </Col>
                    <Col className='OurPartNer_img'>
                        <a>
                            <img src={img2} />
                        </a>
                    </Col>
                    <Col className='OurPartNer_img'>
                        <a>
                            <img src={img3} />
                        </a>
                    </Col>
                    <Col className='OurPartNer_img'>
                        <a>
                            <img src={img4} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
