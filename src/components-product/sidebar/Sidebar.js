import { Col, Container, Row, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Sidebar.css';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import img from '../../img/card-img.jpg';
import img1 from '../../img/card-img-1.jpg';
import img2 from '../../img/card-img-2.jpg';
import img3 from '../../img/card-img-3.jpg';
import img4 from '../../img/card-img-4.jpg';
import img5 from '../../img/card-img-5.jpg';
import Product from '../../components/product/Product';

export default function Sidebar(args) {
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const [isActive, setIsActive] = useState({});
    // Hàm xử lý toggle cho từng thẻ
    const handleToggle = (id) => {
        setIsActive((prev) => ({
            ...prev,
            [id]: !prev[id], //Đảo ngược trạng thái của thẻ có id tương ứng
        }));
    };
    const getData = () => {
        const api = `https://653e66669e8bd3be29df402b.mockapi.io/dog-cat-food/`;
        axios
            .get(api)
            .then((res) => {
                setData(res.data);
            })
            .catch((Error) => {
                console.log('Lỗi khi lấy dữ liệu:', Error);
            });
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="Sidebar">
            <Container>
                <Row>
                    <Col className="col-3 col-left">
                        <div className="Sidebar_left">
                            <div className="Sidebar_left-row">
                                <h5>Loại</h5>
                                <div className="Sidebar_left-list">
                                    <ul>
                                        <li className={isActive[1] ? 'active' : ''} onClick={() => handleToggle(1)}>
                                            <a className="">
                                                Thực phẩm đông lạnh
                                                <i class="fa-solid fa-plus"></i>
                                                <i class="fa-solid fa-minus"></i>
                                            </a>

                                            <ul className="Sidebar_left-sublist ">
                                                <li>
                                                    <a>Thức ăn gà con</a>
                                                </li>
                                                <li>
                                                    <a>Nhai Que Vừa</a>
                                                </li>
                                                <li>
                                                    <a>Topping hương vị cua</a>
                                                </li>
                                                <li>
                                                    <a>Cá Ngừ vs Cá Hồi</a>
                                                </li>
                                                <li>
                                                    <a>Công thức dàn cho chó con</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={isActive[2] ? 'active' : ''} onClick={() => handleToggle(2)}>
                                            <a>
                                                Thức ăn cho chó <i class="fa-solid fa-plus"></i>
                                                <i class="fa-solid fa-minus"></i>
                                            </a>

                                            <ul className="Sidebar_left-sublist ">
                                                <li>
                                                    <a>Thức Ăn Khô Hỗn Hợp</a>
                                                </li>
                                                <li>
                                                    <a>Chó nhai</a>
                                                </li>
                                                <li>
                                                    <a>Thức ăn công thức cho chó</a>
                                                </li>
                                                <li>
                                                    <a>Thức ăn cho chó dạng hạt</a>
                                                </li>
                                                <li>
                                                    <a>Nhai Que Vừa</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={isActive[3] ? 'active' : ''} onClick={() => handleToggle(3)}>
                                            <a>
                                                Thức ăn cho mèo <i class="fa-solid fa-plus"></i>
                                                <i class="fa-solid fa-minus"></i>
                                            </a>

                                            <ul className="Sidebar_left-sublist ">
                                                <li>
                                                    <a>Thức ăn gà con</a>
                                                </li>
                                                <li>
                                                    <a>Nhai Que Vừa</a>
                                                </li>
                                                <li>
                                                    <a>Topping hương vị cua</a>
                                                </li>
                                                <li>
                                                    <a>Cá Ngừ vs Cá Hồi</a>
                                                </li>
                                                <li>
                                                    <a>Công thức dàn cho chó con</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={isActive[4] ? 'active' : ''} onClick={() => handleToggle(4)}>
                                            <a>
                                                Thức ăn cho chim <i class="fa-solid fa-plus"></i>
                                                <i class="fa-solid fa-minus"></i>
                                            </a>

                                            <ul className="Sidebar_left-sublist ">
                                                <li>
                                                    <a>Thịt gà khô Whiskas</a>
                                                </li>
                                                <li>
                                                    <a>Cá Ngừ vs Cá Hồi</a>
                                                </li>
                                                <li>
                                                    <a>Topping cá hồi</a>
                                                </li>
                                                <li>
                                                    <a>Mèo bổ sung protein</a>
                                                </li>
                                                <li>
                                                    <a>Nhai Que Vừa</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Sidebar_left-row">
                                <h5>Mua sắm theo trọng lượng</h5>
                                <div className="Sidebar_list-button-1">
                                    <button>1kg</button>
                                    <button>2kg</button>
                                    <button>3kg</button>
                                </div>
                            </div>
                            <div className="Sidebar_left-row">
                                <h5>Mua sắm theo giá</h5>
                                <div className="Sidebar_list-button-2">
                                    <button>150.000đ - 300.000đ</button>
                                    <button>300.000đ - 600.000đ</button>
                                    <button>600.000đ - 900.000đ</button>
                                    <button>900.000đ - 1.200.000đ</button>
                                </div>
                            </div>
                            <div className="Sidebar_left-row">
                                <h5>Mua sắm theo loài</h5>
                                <div className="Sidebar_list-button-1">
                                    <button>Mèo</button>
                                    <button>Chó</button>
                                    <button>Chim</button>
                                </div>
                            </div>
                            <div className="Sidebar_left-row">
                                <h5>Mua sắm theo kích cỡ giống</h5>
                                <div className="Sidebar_list-button-3">
                                    <button>Rất nhỏ</button>
                                    <button>Nhỏ</button>
                                    <button>Trung bình</button>
                                    <button>Lớn</button>
                                </div>
                            </div>
                            <div className="Sidebar_left-row">
                                <h5>Ưu đãi hấp dẫn</h5>
                                <div className="Sidebar_list-button">
                                    <Row className="NewProduct_row ">
                                        {data.map((item, index) => (
                                            <Col sm="12" md="12">
                                                <Product product={item} index={index} />
                                            </Col>
                                        ))}
                                    </Row>
                                    <div className="prev-green Sidebar_prev">
                                        <div className="prev-left">
                                            <i class="fa-solid fa-chevron-left"></i>
                                        </div>
                                        <div className="prev-right">
                                            <i class="fa-solid fa-chevron-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Sidebar_left-row">
                                <h5>Bán chạy nhất</h5>
                                <div className="Sidebar_list-button">
                                    <div className="Sidebar_card">
                                        <div className="Sidebar_thumb">
                                            <img src={img1} />

                                            <a className="Sidebar_sub-thumb">
                                                <img src={img} />
                                            </a>
                                        </div>
                                        <div className="Sidebar_content">
                                            <h3>Phả Chảy</h3>
                                            <span>300.000đ</span>
                                            <div className="review">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Sidebar_card">
                                        <div className="Sidebar_thumb">
                                            <img src={img2} />

                                            <a className="Sidebar_sub-thumb">
                                                <img src={img3} />
                                            </a>
                                        </div>
                                        <div className="Sidebar_content">
                                            <h3>Công thức dành cho chó con</h3>
                                            <span>250.000đ</span>
                                            <div className="review">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Sidebar_card">
                                        <div className="Sidebar_thumb">
                                            <img src={img4} />

                                            <a className="Sidebar_sub-thumb">
                                                <img src={img5} />
                                            </a>
                                        </div>
                                        <div className="Sidebar_content">
                                            <h3>Cá Ngừ & Cá Hồi</h3>
                                            <span>320.000đ</span>
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
                            </div>
                        </div>
                    </Col>
                    <Col className="col-9 col-right">
                        <div className="Sidebar_right-header">
                            <div className="Sidebar_header_left">
                                <div>
                                    <i class="fa-solid fa-ellipsis"></i>
                                    <i class="fa-solid fa-ellipsis"></i>
                                    <i class="fa-solid fa-ellipsis"></i>
                                </div>
                                <div>
                                    <i class="fa-solid fa-table-list"></i>
                                </div>
                            </div>
                            <div className="Sidebar_header_mid">
                                <p>Paginate by</p>
                                <span>
                                    9<i class="fa-solid fa-caret-down"></i>
                                </span>
                            </div>
                            <div className="Sidebar_header_right">
                                <p>Featured</p>
                                <i class="fa-solid fa-caret-down"></i>
                            </div>
                        </div>
                        <div className="Sidebar_right-body">
                            <Row className="NewProduct_row ">
                                {data.map((item, index) => (
                                    <Col sm="12" md="4">
                                        <Product product={item} index={index} />
                                    </Col>
                                ))}
                            </Row>
                            <Pagination>
                                <PaginationItem>
                                    <PaginationLink href="#" previous />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">2</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>

                                <PaginationItem>
                                    <PaginationLink href="#" next />
                                </PaginationItem>
                            </Pagination>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className='Sidebar_modal'>
                <Button className="Sidebar_fixed" onClick={toggle}>
                    <i class="fa-solid fa-caret-right"></i>
                </Button>
                <Modal className='Sidebar_modal_wrap' isOpen={modal} toggle={toggle} {...args}>
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                    <ModalBody >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        
                        <Button color="secondary" onClick={toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );
}
