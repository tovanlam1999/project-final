import img from '../../img/logo_.jpg';
import { Nav, Navbar, NavItem, NavLink, Collapse, NavbarText, NavbarBrand, NavbarToggler } from 'reactstrap';
import './Header.css';

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
export default function Header(args,props) {
    const {data} = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const card = () => setModal(!modal);

    const [value, setvalue] = useState('');
   
    return (
        <div className="main">
            <div className="header container">
                <Navbar className="header_navbar">
                    <NavbarBrand className="header_logo" href="/">
                        {' '}
                        <img src={img} />
                    </NavbarBrand>

                    <Collapse navbar className="collapse_nav">
                        <Nav className="header-sreach">
                            <input
                                type="text"
                                placeholder="Tìm kiếm sản phẩm..."
                                value={value}
                                onChange={(e) => setvalue(e.target.value)}
                            />

                            <div>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </Nav>
                    </Collapse>
                    <NavbarText className="header_right navbar">
                        <div className="sreach">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <span className="header_right-text">Tìm Kiếm</span>
                        </div>
                        <div className="login">
                            <i class="fa-solid fa-user"></i>
                            <span className="header_right-text">Đăng Nhập</span>
                        </div>
                        <div className="withlove">
                            <i class="fa-solid fa-heart"></i>
                            <span className="qualiti">0</span>
                            <span className="header_right-text">Yêu Thích</span>
                        </div>
                        <div  className="shopping">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <span className="qualiti">0</span>
                            <span className="header_right-text">Giỏ Hàng</span>
                        </div>
                        <div className="header_navbar-menu" color="danger" onClick={toggle}>
                            <i class="fa-solid fa-bars"></i>
                            <span className="header_right-text">Menu</span>
                        </div>
                    </NavbarText>
                </Navbar>
                <Modal isOpen={modal} toggle={toggle} {...args}>
                    <ModalHeader toggle={toggle}>
                        <Row>
                            <Col className="col-6 moda-item">
                                <i class="fa-solid fa-bars"></i>
                                MENU
                            </Col>
                            <Col className="col-6 moda-item ">
                                <i class="fa-regular fa-user"></i>
                                LOGIN
                            </Col>
                        </Row>
                    </ModalHeader>
                    <ModalBody>
                        <ul className="header_submenu-list">
                            <li>
                                <a>TRANG CHỦ</a>
                                <div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </li>
                            <li>
                                <a>SẢN PHẨM</a>
                                <div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </li>
                            <li>
                                <a>BỘ SIÊU TẬP</a>
                                <div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </li>
                            <li>
                                <a>BLOG</a>
                                <div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </li>
                            <li>
                                <a>LIÊN HỆ</a>
                                <div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </li>
                        </ul>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>
                            <i class="fa-solid fa-xmark"></i>
                            CLOSE
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>

            {/* <div className="Modal_card">
                <div className="Moda_card-headding">
                    <h3>Giỏ Hàng Của Bạn</h3>
                    <div>X</div>
                </div>
                <div className='Modal_card-item'>
                    <Row>
                        <div className='Modal_card-item-img' >
                            <img src={data ? data.img : ''}/>
                        </div>
                    </Row>
                </div>
            </div> */}
        </div>
    );
}
