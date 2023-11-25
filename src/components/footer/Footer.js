
import { Button, Col, Row } from "reactstrap"
import "./Footer.css"
import { useState } from "react"




export default function Footer() {
    const [value, setValue] = useState("")
    return (
        <div className="footer">
            <div className="Content container ">
                <Row className="footer_row">
                    <Col className="Content_item add-width">
                        <h3>Liên hệ chúng tôi</h3>
                        <ul>
                            <li>
                                <i class="fa-solid fa-house"></i>
                                <a>35/33 Bế Văn Cấm, Phường Tân Kiểng,Quận 7,TP Hồ Chí Minh</a>
                            </li>
                            <li>
                                <i class="fa-solid fa-phone"></i>
                                <a>0342610551</a>
                            </li>
                            <li>
                                <i class="fa-regular fa-clock"></i>
                                <a>8h30-19h30 tối</a>
                            </li>
                            <li>
                                <i class="fa-solid fa-envelope"></i>
                                <a>tovanlam1999@gmail.com</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="Content_item add-width">
                        <h3>Thông tin</h3>
                        <ul>
                            <li>
                                <a>Tìm kiếm</a>
                            </li>
                            <li>

                                <a>Giúp đỡ</a>
                            </li>
                            <li>

                                <a>Về chúng tôi</a>
                            </li>
                            <li>

                                <a>Vị trí cửa hàng</a>
                            </li>
                            <li>

                                <a>Cung Cấp</a>
                            </li>
                            <li>

                                <a>Đơn hàng & Trả hàng</a>
                            </li>
                            <li>

                                <a>Chính sách quyền riêng tư</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="Content_item add-width">
                        <h3>Ủng hộ</h3>
                        <ul>
                            <li>
                                <a>Hỗ trợ 24/7</a>
                            </li>
                            <li>

                                <a>Hỗ trợ email</a>
                            </li>
                            <li>

                                <a>Hỗ trợ trò chuyện</a>
                            </li>
                            <li>

                                <a>Hoàn tiền & Trả lại</a>
                            </li>
                            <li>

                                <a>Câu hỏi thường gặp</a>
                            </li>
                            <li>

                                <a>Điều khoản hỗ trợ</a>
                            </li>
                            <li>

                                <a>Điều khoản hoàn trả</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="Content_item add-width">
                        <h3>Giúp đỡ</h3>
                        <ul>
                            <li>
                                <a>Tìm kiếm nâng cao</a>
                            </li>
                            <li>

                                <a>Đơn hàng & Trả hàng</a>
                            </li>
                            <li>

                                <a>Thông tin vận chuyển</a>
                            </li>
                            <li>

                                <a>Định vị cửa hàng</a>
                            </li>
                            <li>

                                <a>Nghề nghiệp</a>
                            </li>
                            <li>

                                <a>Nghiên cứu</a>
                            </li>
                            <li>

                                <a>Điều khoản sử dụng</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="Content_item add-width col-3">
                        <h3>Theo dõi bản tin của chúng tôi</h3>
                        <p>Đăng ký ngay hôm nay và nhận quà tặng hấp dẫn cũng như giảm giá 10% cho đơn hàng đầu tiên của bạn.</p>
                        <div className="Content_item-email">
                            <input
                                required="required"
                                autocapitalize="off"
                                autocorrect="off"
                                type="email"
                                placeholder="Địa chỉ email của bạn"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <button type="submit" name="commit">

                                <i class="fa-regular fa-paper-plane"></i>
                            </button>
                        </div>
                        <h3>Kết nối với chúng tôi</h3>
                        <div className="Content_item-social" >
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-pinterest"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </Col>




                </Row>
            </div>
        </div>
    )
}