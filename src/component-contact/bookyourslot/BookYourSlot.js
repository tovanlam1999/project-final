import { Col, Container, Row } from 'reactstrap';
import './BookYourSlot.css';
import img from '../../img/contact-img.jpg';
import img1 from '../../img/animation-contact.jpg';
import { useState } from 'react';
export default function BookYourSlot() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    return (
        <div className="BookYourSlot">
            <Container>
                <Row>
                    <Col className="col-7">
                        <div className="BookYourSlot_left">
                            <div className="BookYourSlot-img">
                                <img src={img} />
                            </div>
                            <div className="BookYourSlot_info">
                                <h3>Đặt chỗ của bạn</h3>
                                <div className="BookYourSlot_list-address">
                                    <div className="BookYourSlot_list-item">
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="Tên"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            aria-invalid="false"
                                        />
                                    </div>

                                    <div className="BookYourSlot_list-item">
                                        <input
                                            name="address"
                                            type="email"
                                            placeholder="Địa chỉ email"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            required
                                            aria-invalid="false"
                                        />
                                    </div>
                                    <div className="BookYourSlot_list-item">
                                        <input
                                            name="subject"
                                            type="text"
                                            placeholder="Chủ thể"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            required
                                            aria-invalid="false"
                                        />
                                    </div>
                                    <div className="BookYourSlot_list-item">
                                        <input
                                            name="message"
                                            type="text"
                                            placeholder="Tin nhắn"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                            aria-invalid="false"
                                        />
                                    </div>
                                    <div className="BookYourSlot_list-btn">
                                        <button>GỬI</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-5">
                        <div className="BookYourSlot_right">
                            <div className="BookYourSlot_right-content">
                                <h3>Chúng Tôi Luôn Sẵn Sàng Phục Vụ Bạn Và Thú Cưng Của Bạn</h3>
                                <p>
                                    Hai đường chuyền trong bộ bài hơn phim hoạt hình. Proin sagittis nisl rhoncus mattis
                                    rhoncus urna.
                                </p>
                            </div>
                            <div className="BookYourSlot_right-address">
                                <div className="BookYourSlot_address-item">
                                    <div className='BookYourSlot_icon'>
                                        <i class="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className='BookYourSlot_desc'>
                                        <h6>Địa chỉ</h6>
                                        <p>35/33 Bế Văn Cấm, Phường Tân Kiểng, Quận 7, TPHCM</p>
                                    </div>
                                </div>
                                <div className="BookYourSlot_address-item">
                                    <div className='BookYourSlot_icon'>
                                        {' '}
                                        <i class="fa-solid fa-phone"></i>
                                    </div>
                                    <div className='BookYourSlot_desc'>
                                        <h6>Liên hệ</h6>
                                        <a>+84 034 261 551</a>
                                        <a>+84 034 261 551</a>
                                    </div>
                                </div>
                                <div className="BookYourSlot_address-item">
                                    <div  className='BookYourSlot_icon'>
                                        <i class="fa-regular fa-envelope"></i>
                                    </div>
                                    <div  className='BookYourSlot_desc'>
                                        <h6>E-Mail</h6>
                                        <a>tovanlam1999@gmai.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
