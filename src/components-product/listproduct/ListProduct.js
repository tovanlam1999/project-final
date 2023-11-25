import { useState, useEffect } from 'react';
import './ListProduct.css';
import { Col, Container, Row } from 'reactstrap';
import img from '../../img/detail-img.jpg';
import img1 from '../../img/detail-img-1.jpg';
import img2 from '../../img/detail-img-2.jpg';
import img3 from '../../img/detail-img-3.jpg';
import img4 from '../../img/detail-img-4.jpg';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AddCard from '../addcard/AddCard';
export default function ListProduct(props, args) {
    const { data } = props;
    const [value, setValue] = useState(1);
    const [modal, setModal] = useState(false);
    const { listCard, setListCard } = useState([]);
    const toggle = () => {
        console.log('Toggle function is called');
        setModal(!modal);
    };
    const handleButtonClick = (groupIndex, buttonIndex) => {
        // Lấy tất cả các button trong các nhóm và lặp qua từng button
        const groups = document.querySelectorAll('.ListProduct_content-item-btn button');

        groups.forEach((button, index) => {
            // Thêm một bộ lắng nghe sự kiện "click" cho mỗi button
            button.addEventListener('click', () => {
                // Lấy tất cả các anh chị em (các button trong cùng một nhóm)
                const siblings = Array.from(button.parentNode.children);

                // Duyệt qua từng anh chị em
                siblings.forEach((sibling) => {
                    // Loại bỏ class 'active' từ tất cả các anh chị em
                    sibling.classList.remove('active');
                });

                // Thêm class 'active' cho button được click
                button.classList.add('active');
            });
        });
    };
    const handlePlusOrMinus = (calculate) => {
        if (calculate === 'minus' && value > 0) {
            setValue(value - 1);
        } else if (calculate === 'plus') {
            setValue(value + 1);
        }
    };

    const calcTotal = (row) => {
        const price = parseFloat(row.price);
        const quantity = parseInt(row.value, 10);

        if (!isNaN(price) && !isNaN(quantity)) {
            return price * quantity;
        }

        return 0;
    };
    const calcAllTotal = () => {
        let total = 0;

        listCard.forEach((row) => {
            total += calcTotal(row);
        });

        return total;
    };
    return (
        <div className="ListProduct">
            <Container>
                <Row>
                    <Col sm="3" md="6" className="ListProduct_col col-6">
                        <div className="ListProduct_img">
                            <img src={`${data ? data.img : ''}`} alt="" />
                        </div>
                        <div className="ListProduct_sub-img">
                            <div className=" ListProduct_sub-img-item ">
                                <img src={img} />
                            </div>
                            <div className=" ListProduct_sub-img-item ">
                                <img src={img1} />
                            </div>
                            <div className=" ListProduct_sub-img-item ">
                                <img src={img2} />
                            </div>
                            <div className=" ListProduct_sub-img-item ">
                                <img src={img3} />
                            </div>
                            <div className=" ListProduct_sub-img-item ">
                                <img src={img4} />
                            </div>
                        </div>
                    </Col>
                    <Col sm="3" md="6" className="ListProduct_col col-6">
                        <div className="ListProduct_content">
                            <div className="ListProduct_content-top">
                                <h3>{data ? data.title : ''}</h3>
                                <div className="review">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p>{data ? data.desc : ''}</p>
                            </div>
                            <div className="ListProduct_content-mid">
                                <div className="ListProduct_content-item">
                                    <h6>Giá:</h6>
                                    <span>{data ? data.price : ''}</span>
                                </div>
                                <div className="ListProduct_content-item">
                                    <h6>Cân nặng:</h6>
                                    <div className="ListProduct_content-item-btn">
                                        <button className="active" onClick={() => handleButtonClick(0, 0)}>
                                            3kg
                                        </button>
                                        <button onClick={() => handleButtonClick(0, 1)}>2kg</button>
                                        <button onClick={() => handleButtonClick(0, 2)}>1kg</button>
                                    </div>
                                </div>
                                <div className="ListProduct_content-item">
                                    <h6>Giống loài:</h6>
                                    <div className="ListProduct_content-item-btn">
                                        <button className="active" onClick={() => handleButtonClick(1, 0)}>
                                            Dog
                                        </button>
                                        <button datatype="" onClick={() => handleButtonClick(1, 1)}>
                                            Cat
                                        </button>
                                        <button onClick={() => handleButtonClick(1, 2)}>Bird</button>
                                    </div>
                                </div>
                                <div className="ListProduct_content-item">
                                    <h6>Kícsh thước:</h6>
                                    <div className="ListProduct_content-item-btn">
                                        <button className="active" onClick={() => handleButtonClick(2, 0)}>
                                            Trung bình
                                        </button>
                                        <button onClick={() => handleButtonClick(2, 1)}>Lớn</button>
                                        <button onClick={() => handleButtonClick(2, 2)}>Bé</button>
                                    </div>
                                </div>
                                <div className="ListProduct_content-item">
                                    <h6>Người bán:</h6>
                                    <span>Phản hệ</span>
                                </div>
                                <div className="ListProduct_content-item">
                                    <h6>Kiểu:</h6>
                                    <span>Đóng hộp</span>
                                </div>
                                <div className="ListProduct_content-item">
                                    <h6>Số lượng:</h6>
                                    <div className="ListProduct_content-item-number">
                                        <button onClick={() => handlePlusOrMinus('minus')}>-</button>
                                        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                                        <button onClick={() => handlePlusOrMinus('plus')}>+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="ListProduct_content-bottom">
                                <div className="ListProduct_content-bottom-item">
                                    <div className="btn_card ">
                                        <button onClick={toggle}>Thêm vào giỏ hàng</button>
                                        <button>Mua nó ngay</button>
                                    </div>
                                    <button className="btn_w100">Thêm vào danh sách yêu thích</button>
                                </div>
                                <div className="ListProduct_content-bottom-social">
                                    <h6>Chia sẽ với chúng tôi:</h6>

                                    <div className="">
                                        <i class="fa-brands fa-facebook-f"></i>
                                        <i class="fa-brands fa-twitter"></i>
                                        <i class="fa-brands fa-pinterest"></i>
                                        <i class="fa-brands fa-google"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="ListProduct_bottom">
                    <div className="ListProduct_bottom-headding">
                        <button className="active">Mô tả sản phẩm</button>
                        <button className="">Thông tin vận chuyển</button>
                        <button className="">Đánh giá</button>
                    </div>
                    <div className="ListProduct_bottom-desc active">
                        <p>
                            Thật không may, trong quá trình thử nghiệm lâm sàng, huyết áp của bệnh nhân đã tăng lên. Ai
                            là tác giả của cuốn sách nhưng vulputate là một điều tốt cho tôi. Đôi khi cũng không có
                            nghĩa là luật pháp đã bị đình chỉ. Cái giá của phim hoạt hình đã đình chỉ quyền lực và cổ
                            họng của sự sống trong sáng. Nó cần một nhân vật hoạt hình thuần túy trong người chơi.
                        </p>
                        <h6>Khách hàng rất vui</h6>
                        <p>
                            Đó sẽ là một khóa đào tạo tốt, nhưng nó sẽ diễn ra vào thời điểm có rất nhiều công sức và
                            đau đớn. Để đi đến chi tiết nhỏ nhất, không ai nên thực hiện bất kỳ loại công việc nào trừ
                            khi anh ta thu được lợi ích nào đó từ nó. Đừng tức giận với nỗi đau trong sự khiển trách
                            trong niềm vui mà anh ấy muốn được thoát khỏi nỗi đau với hy vọng rằng không có sự sinh sản.
                        </p>
                        <h6>Busey rất buồn</h6>
                        <p>
                            Tortor, nhưng tác giả của cái nồi bây giờ có chút lo sợ về hướng đi này. Tôi ghét thời gian
                            dành cho các thử nghiệm lâm sàng. Tortor sốt lacinia quis hoặc eros cho đến khi ghét.
                            Euismod muốn đầu tư vào khối lượng lớn của hai hồ Ultricies. Sô cô la nguyên chất luôn cần
                            một vài cốc nước sốt. Trong bóng đá dễ dãi nhưng có lòng căm thù bệnh tật, ai được lợi từ
                            việc căm ghét giáo đồng nhưng có yếu tố?
                        </p>
                        <h6>Nó rất thú vị</h6>
                        <p>
                            Đó là một ngôi nhà sinh thái lành mạnh. Tôi luôn hạnh phúc với cuộc sống của mình, đó là
                            bóng đá. Ngày mai, bây giờ là thời điểm tốt để chơi bóng đá. Maecenas và est ngồi amet ague
                            pharetra convallis nec danos dui. Ngày mai anh ấy sẽ phải làm rất nhiều bài tập về nhà với
                            tư cách là một học sinh trung học. Chúng tôi không quan tâm. Nhưng cái giá của cuộc đời tôi
                            là giá xe tải, xe tải. Không có chất kích thích nào dành cho trẻ em chỉ có ở tincidunt
                            lobortis denimes loremous. Chiếc giường nằm trên giường suốt thời gian còn lại trong ngày,
                            giống như một chiếc gối thuần khiết. Điều quan trọng là bản thân tác giả.
                        </p>
                    </div>
                    <div className="ListProduct_bottom-desc ">
                        <h6>Chính sách hoàn trả</h6>
                        <p>
                            Bạn có thể trả lại hầu hết các mặt hàng mới, chưa mở trong vòng 30 ngày kể từ ngày giao hàng
                            để được hoàn lại tiền đầy đủ. Chúng tôi cũng sẽ thanh toán chi phí vận chuyển trả lại nếu
                            việc trả lại là do lỗi của chúng tôi (bạn đã nhận được mặt hàng không chính xác hoặc bị lỗi,
                            v.v.).
                        </p>
                        <p>
                            Bạn sẽ nhận được tiền hoàn lại trong vòng bốn tuần kể từ khi giao gói hàng của mình cho
                            người gửi trả lại, tuy nhiên, trong nhiều trường hợp bạn sẽ nhận được hoàn lại tiền nhanh
                            hơn. Khoảng thời gian này bao gồm thời gian vận chuyển để chúng tôi nhận được hàng trả lại
                            của bạn từ người gửi hàng (5 đến 10 ngày làm việc), thời gian chúng tôi xử lý hàng trả lại
                            của bạn sau khi chúng tôi nhận được hàng (3 đến 5 ngày làm việc) và thời gian cần thiết ngân
                            hàng của bạn xử lý yêu cầu hoàn tiền của chúng tôi (5 đến 10 ngày làm việc).
                        </p>
                        <p>
                            Nếu bạn cần trả lại một mặt hàng, chỉ cần đăng nhập vào tài khoản của bạn, xem đơn hàng bằng
                            cách sử dụng 'Hoàn thành đơn hàng' ; liên kết trong menu Tài khoản của tôi và nhấp vào nút
                            Trả lại (các) mặt hàng. Chúng tôi sẽ thông báo cho bạn qua e-mail về khoản hoàn trả của bạn
                            sau khi chúng tôi nhận và xử lý mặt hàng được trả lại.
                        </p>
                        <h6>Đang chuyển hàng</h6>
                        <p>
                            Chúng tôi có thể gửi hàng đến hầu hết mọi địa chỉ trên thế giới. Lưu ý rằng có những hạn chế
                            đối với một số sản phẩm và một số sản phẩm không thể được vận chuyển đến các điểm đến quốc
                            tế.
                        </p>
                        <p>
                            Khi bạn đặt hàng, chúng tôi sẽ ước tính ngày vận chuyển và giao hàng cho bạn dựa trên tình
                            trạng sẵn có của các mặt hàng và các tùy chọn vận chuyển bạn chọn. Tùy thuộc vào nhà cung
                            cấp dịch vụ vận chuyển bạn chọn, ước tính ngày vận chuyển có thể xuất hiện trên trang báo
                            giá vận chuyển.
                        </p>
                        <p>
                            Cũng xin lưu ý rằng phí vận chuyển cho nhiều mặt hàng chúng tôi bán dựa trên trọng lượng.
                            Trọng lượng của bất kỳ mặ t hàng nào như vậy có thể được tìm thấy trên trang chi tiết của
                            nó. Để phản ánh chính sách của các công ty vận chuyển mà chúng tôi sử dụng, tất cả trọng
                            lượng sẽ được làm tròn đến pound đầy đủ tiếp theo.
                        </p>
                    </div>
                    <div className="ListProduct_bottom-desc ">
                        <h3>Phản hồi khách hàng</h3>
                        <div className="ListProduct_bottom-desc-review">
                            <div>
                                <div className="review">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p>Dựa trên đánh giá</p>
                                <button>Viết đánh giá</button>
                            </div>
                        </div>

                        <div className="ListProduct_bottom-customer-reviews">
                            <div className="review">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <h6>Khách hàng rất vui</h6>
                            <span>Michael Shaw vào Ngày 28 tháng 6 năm 2019</span>
                            <p>
                                Học sinh sẽ có thể được giáo dục, nhưng nó sẽ xảy ra vào một thời điểm mà sẽ có công
                                việc và đau khổ vô cùng. Vì tôi không muốn uống mùi vị hôi hám của bóng đá.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="ListProduct_question">
                <i class="fa-solid fa-clipboard-question"></i>
                <a>Hỏi gì về sản phẩm?</a>
            </div>

            <Modal className="Modal_card" isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader className="Modal_card-header" toggle={toggle}>
                    Giỏ hàng của bạn
                    <button onClick={toggle}>X</button>
                </ModalHeader>
                <ModalBody>
                    <AddCard/>
                </ModalBody>

                <ModalFooter className="Modal_footer">
                    <Button onClick={toggle}>Thanh toán</Button>
                    <Button onClick={toggle}>Xem giỏ hàng</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
