import image from '../../img/Logo-img-1.png';
import { Nav, Navbar, NavItem, NavLink, Collapse, NavbarText, NavbarBrand, NavbarToggler } from 'reactstrap';
import './Header.css';

import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Header(args, props) {
    const { data } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const card = () => setModal(!modal);
    const [listCard, setListCard] = useState([]);
    const [cart, setCart] = useState([]);
    const [value, setvalue] = useState('');
    console.log(cart);
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
        if (localStorage.getItem('cart')) {
            setCart(JSON.parse(localStorage.getItem('cart')));
        }

        if (Array.isArray(storedCart)) {
            setCart(storedCart);
        }
    }, []);

    return (
        <div className="main">
            <div className="header container">
                <Navbar className="header_navbar">
                    <NavbarBrand className="header_logo" href="/">
                        {' '}
                        <img src={image} />
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
                                <span className="qualiti">{cart.length}</span>
                                <span className="header_right-text">Giỏ Hàng</span>
                            </Link>
                            <div className="cart_shopping">
                                <ul>
                                    {Array.isArray(cart) && cart.length > 0 ? (
                                        cart.map((product) => (
                                            <li key={product.id} className="li_cart">
                                                <div className="li_img">
                                                    <img src={product ? product.img : ''} />
                                                </div>
                                                <span className="li_mid">
                                                    <h3>{product ? product.title : ''}</h3>
                                                    <div className="li_price">
                                                        <span>{product ? product.qty : ''} </span>x
                                                        <span> {product ? product.price : ''}</span>
                                                    </div>
                                                </span>
                                                <span className="li_clear">X</span>
                                            </li>
                                        ))
                                    ) : (
                                        <p>Giỏ hàng của bạn đang trống.</p>
                                    )}
                                    <div className="cart_shopping-total">
                                        <h6>Subtotal:</h6>
                                        <span></span>
                                    </div>
                                    <div className="cart_shopping-btn">
                                        <Link to={`/petshop/gio-hang`}>
                                            <button>Xem giỏ hàng</button>
                                        </Link>

                                        <Link to={`/`}>
                                            <button>Thanh toán</button>
                                        </Link>
                                    </div>
                                </ul>
                            </div>
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
                                <Link to={`/petshop/dang-nhap/`}>
                                    <i class="fa-regular fa-user"></i>
                                    LOGIN
                                </Link>
                            </Col>
                        </Row>
                    </ModalHeader>
                    <ModalBody>
                        <ul className="header_submenu-list">
                            <li>
                                <Link to={`/`}>Home</Link>
                            </li>
                            <li>
                                <Link to={`/petshop/dich-vu`}>Dịch vụ</Link>
                            </li>
                            <li>
                                <Link to={`/petshop/tat-ca-san-pham`}>Sản phẩm</Link>
                            </li>
                            <li>
                                <Link to={`/petshop/ve-chung-toi`}>Về chúng tôi</Link>
                            </li>
                            <li>
                                <Link to={`/petshop/tin-tuc`}>Tin tức</Link>
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
