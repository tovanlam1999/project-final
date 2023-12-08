import img from "../../img/Logo-img-1.png"
import { Nav, Navbar, NavItem, NavLink, Collapse, NavbarText, NavbarBrand, NavbarToggler } from 'reactstrap';
import './Header.css';

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
export default function Header(args, props) {
    const { data } = props;
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

                    
                    <NavbarText className="header_right navbar">
                        <div className="sreach">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <span className="header_right-text">Tìm Kiếm</span>
                        </div>
                        <div className="login">
                            <Link to={`/petshop/dang-nhap/`}>
                                <i class="fa-solid fa-user"></i>
                                <span className="header_right-text">Đăng Nhập</span>
                            </Link>
                        </div>
                        <div className="withlove">
                            <Link>
                                <i class="fa-solid fa-heart"></i>
                                <span className="qualiti">0</span>
                                <span className="header_right-text">Yêu Thích</span>
                            </Link>
                        </div>
                        <div className="shopping">
                            <Link to={`/petshop/gio-hang/`}>
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span className="qualiti">0</span>
                                <span className="header_right-text">Giỏ Hàng</span>
                            </Link>
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
                                <Link to={`/`}>Home</Link>
                                
                            </li>
                            <li>
                                <Link to={`/petshop/tat-ca-san-pham`}>Collection</Link>
                                
                            </li>
                            <li>
                                <Link to={``}>Khuyến mãi</Link>
                                
                            </li>
                            <li>
                                <Link to={`/petshop/tin-tuc`}>BLOG</Link>
                                
                            </li>
                            <li>
                                <Link to={`/petshop/lien-he`}>LIÊN HỆ</Link>
                               
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

            
        </div>
    );
}
