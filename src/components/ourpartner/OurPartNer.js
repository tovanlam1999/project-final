import { Container, Row, Col } from 'reactstrap';
import img from '../../img/logo-partner.jpg';
import img1 from '../../img/logo-partner-1.jpg';
import img2 from '../../img/logo-partner-2.jpg';
import img3 from '../../img/logo-partner-3.jpg';
import img4 from '../../img/logo-partner-4.jpg';
import img5 from '../../img/logo-partner-5.jpg';
import img6 from '../../img/logo-partner-6.jpg';
import img7 from '../../img/logo-partner-7.jpg';
import img8 from '../../img/logo-partner-8.jpg';
import './OurPartNer.css';
import { useEffect, useState } from 'react';

export default function OurPartNer() {
    const images = [img, img1, img2, img3, img4, img, img1, img2, img3, img4];
    const [activeIndex, setActiveIndex] = useState(0);
    const doubledImages = [...images, ...images];
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);

        return () => {
            clearInterval(interval);
        };
    }, [images.length]);
    const handleTransitionEnd = () => {
        if (activeIndex === doubledImages.length - 1) {
            // Reset to the first image when reaching the last image
            setActiveIndex(0);
        }
    };
    return (
        <div className="OurPartNer">
            <div className="border-animation active">
                <h2>Đối Tác Tốt Nhất Của Chúng Tôi</h2>
                <span className="border-top"></span>
                <span className="border-right"></span>
                <span className="border-bottom"></span>
                <span className="border-left"></span>
            </div>
            <Container className="OurPartNer_container">
                <Row className="OurPartNer_row" onTransitionEnd={handleTransitionEnd}>
                    {images.map((image, index) => (
                        <Col className='OurPartNer_col'
                            key={index}
                            md="3"
                            style={{ transform: `translateX(-${activeIndex * (100 / images.length)}%)`, transition: '0.5s' ,padding:"0"}}
                        >
                            <img
                                src={image}
                                alt={`slide-${index}`}
                                className={`OurPartNer_img ${index === activeIndex ? 'active' : ''}`}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
