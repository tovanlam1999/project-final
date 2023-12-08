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
    async function getListCard() {
        try {
            const res = await axios.get('https://653e66669e8bd3be29df402b.mockapi.io/dog-cat-food/');
            setListCard(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getListCard();
        if (localStorage.getItem('cart')) {
            setCart(JSON.parse(localStorage.getItem('cart')));
        }
    }, []);

    useEffect(() => {
        getListCard();
        // Lấy dữ liệu từ localStorage
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        console.log('Stored Cart:', storedCart);
        setCart(storedCart);
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
                                <div className="cart_shopping">
                                    <ul>
                                        {
                                            cart.map((product) => (
                                                <li key={product.id}>
                                                    <div>
                                                        <img src={product ? product.img : ""}/>
                                                    </div>
                                                    <div>
                                                        <h3>{product ? product.name : ""}</h3>
                                                        <div>
                                                            <span>{product ? product.quantity : ""}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
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
