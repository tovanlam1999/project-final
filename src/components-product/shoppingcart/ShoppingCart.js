// import { Col, Container, Row } from 'reactstrap';
// import './ShoppingCart.css';
// import AddCard from '../addcard/AddCard';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// export default function ShoppingCart(props) {
//     const { data } = props;
//     const [cart, setCart] = useState([]);
//     useEffect(() => {
//         // Lấy dữ liệu từ localStorage
//         const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//         console.log(storedCart)
//         setCart(storedCart);
//     }, []);
//     console.log(cart)
//     return (
//         <div className="ShoppingCart">
//             <Container>
//                 <Row>
//                     <Col className="col-8">
//                         <Row>
//                             <Col>
//                                 <div className="ShoppingCart-img">
//                                     <img src={data ? data.img : ''} />
//                                 </div>
//                                 <div className='ShoppingCart-content' >

//                                 </div>
//                             </Col>
//                         </Row>
//                     </Col>
//                     <Col className="col-4"></Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// }

// {
//     /* {cart.length > 0 ? (
//                         cart.map((item) => <AddCard handle_delete={handle_delete} data={item} />)
//                     ) : (
//                         <div className="ShoppingCart_item active">
//                             <div>
//                                 <i class="fa-solid fa-cart-shopping"></i>
//                             </div>s
//                             <div className="ShoppingCart_item-content">
//                                 <h4>Giỏ hàng của bạn hiện đang trống.</h4>
//                                 <p>Thêm sản phẩm bạn muốn mua sắm</p>
//                             </div>
//                             <Link to={`/petshop/tat-ca-san-pham`}>
//                                 <button>Tiếp tục mua sắm</button>
//                             </Link>
//                         </div>
//                     )} */
// }
