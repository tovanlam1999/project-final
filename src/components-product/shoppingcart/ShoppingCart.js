import { Col, Container, Row } from 'reactstrap';
import './ShoppingCart.css';
import AddCard from '../addcard/AddCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ShoppingCart(props) {
    const [listCard, setListCard] = useState([]);
    const [cart, setCart] = useState([]);
    const [value, setValue] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isEmptyCart, setIsEmptyCart] = useState(false);
    // Dữ liệu mẫu, bạn có thể thay thế bằng dữ liệu thực

    const [isAddressVisible, setIsAddressVisible] = useState(false);

    const handleAddressChange = () => {
        // Khi click vào change_address, thay đổi trạng thái của isAddressVisible
        setIsAddressVisible((prev) => !prev);
    };
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

    useEffect(() => {
        setIsEmptyCart(cart.length === 0);
    }, [cart]);
    useEffect(() => {
        // Tính tổng tiền khi giỏ hàng thay đổi
        const total = cart.reduce((acc, item) => {
            const priceAsNumber = parseFloat(item.price.replace(',', ''));
            const itemTotal = priceAsNumber * item.qty;
            return acc + itemTotal;
        }, 0);

        setTotalPrice(total);
    }, [cart]);

    const handle_delete = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        // Kiểm tra nếu cart trống, cập nhật showEmptyCart
    };
    const handlePlusOrMinus = (productId, calculate) => {
        setCart((prevCart) =>
            prevCart.map((product) => {
                if (product.id === productId) {
                    if (calculate === 'minus' && product.qty > 0) {
                        return { ...product, qty: product.qty - 1 };
                    } else if (calculate === 'plus') {
                        return { ...product, qty: product.qty + 1 };
                    }
                }
                return product;
            })
        );
    };
    const calculateTotalPrice = () => {
        if (!Array.isArray(cart)) {
            return 0; // hoặc giá trị mặc định khác tùy thuộc vào yêu cầu của bạn
        }
        // Tính tổng giá trị của tất cả các phần tử trong mảng cart
        const total = cart.reduce((acc, item) => {
            // Chuyển đổi giá trị thành số và nhân với số lượng
            const priceAsNumber = parseFloat(item.price.replace(',', ''));
            const itemTotal = priceAsNumber * item.qty;

            // Cộng vào tổng
            return acc + itemTotal;
        }, 0);

        // Định dạng số với dấu phẩy ngăn cách
        const formattedTotal = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total);

        return formattedTotal;
    };
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    return (
        <div className="ShoppingCart">
            <Container className={`ShoppingCart_container ${isEmptyCart ? 'active' : ''}`}>
                <table className="table">
                    <thead>
                        <tr className="table_title">
                            <th>Sản phẩm</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Tổng tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray && cart.length > 0
                            ? cart.map((product) => (
                                  <tr key={product.id} className="table_main">
                                      <td className="table_img">
                                          <img src={product ? product.img : ''} />
                                      </td>
                                      <td className="table_title">{product ? product.title : ''}</td>
                                      <td className="table_price">{product ? product.price : ''}</td>
                                      <td>
                                          <div className="table_number">
                                              <button onClick={() => handlePlusOrMinus(product.id, 'minus')}>-</button>
                                              <input
                                                  type="text"
                                                  value={product.qty}
                                                  onChange={(e) => setValue(e.target.value)}
                                                  readOnly
                                              />
                                              <button onClick={() => handlePlusOrMinus(product.id, 'plus')}>+</button>
                                          </div>
                                      </td>
                                      <td className="table_total">
                                          {formatCurrency(product.qty * parseFloat(product.price.replace(',', '')))}
                                      </td>
                                      <td className="table_clear" onClick={() => handle_delete(product.id)}>
                                          <span>X</span>
                                      </td>
                                  </tr>
                              ))
                            : ''}
                    </tbody>
                </table>
                <div className="ShoppingCart_sale">
                    <h3>Phiếu mua hàng:</h3>
                    <div className="ShoppingCart_code-sale">
                        <input type="text" placeholder="Mã giảm giá" />
                        <button>Áp dụng phiếu giảm giá</button>
                    </div>
                </div>
                <div className="ShoppingCart_payment">
                    <h3>Tổng số giỏ hàng</h3>
                    <div className="ShoppingCart_payment-item">
                        <h6>Tổng phụ</h6>
                        <span>{formatCurrency(totalPrice)}</span>
                    </div>
                    <div className="ShoppingCart_payment-item transport">
                        <h6>Đang chuyển hàng</h6>
                        <div className="address">
                            <span>Miễn Phí Vận Chuyển</span>
                        </div>
                    </div>

                    <span className="delivery_address"></span>
                    <div className="ShoppingCart_payment-item">
                        <h3>Tổng Cộng</h3>
                        <span className="total_price">{formatCurrency(totalPrice)}</span>
                    </div>
                    <Link to={`/petshop/check-out`}>
                        <button>TIẾN HÀNH THANH TOÁN</button>
                    </Link>
                </div>
            </Container>
            <Container>
                <div className={`return_store ${cart.length > 0 ? 'active' : ''}`}>
                    <span>Giỏ hàng của bạn hiện đang trống.</span>
                    <Link to={`/petshop/tat-ca-san-pham`}>
                        <button>Quay lại cửa hàng</button>
                    </Link>
                </div>
            </Container>
        </div>
    );
}

{
}
