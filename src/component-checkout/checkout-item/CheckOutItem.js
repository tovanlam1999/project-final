import { Container } from 'reactstrap';
import './CheckOutItem.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

export default function CheckOutItem() {
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [towns, setTowns] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isEmptyCart, setIsEmptyCart] = useState(false);
    const [name, setName] = useState('');
    const [ho, setHo] = useState('');
    const [street, setStreet] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const getCity = () => {
        const api = `https://provinces.open-api.vn/api/`;

        axios
            .get(api)
            .then((res) => {
                setCities(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const getDistrict = () => {
        const api = `https://provinces.open-api.vn/api/d/`;
        axios
            .get(api)
            .then((res) => {
                setDistricts(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const getTown = () => {
        const api = `https://provinces.open-api.vn/api/w/`;
        axios
            .get(api)
            .then((res) => {
                setTowns(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getCity();
    }, []);

    const handleCityChange = (event) => {
        const selectedCityCode = event.target.value;
        setSelectedCity(selectedCityCode);
        getDistrict(selectedCityCode);
    };

    const handleDistrictChange = (event) => {
        const selectedDistrictCode = event.target.value;
        setSelectedDistrict(selectedDistrictCode);
        getTown(selectedDistrictCode);
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
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    const handleOrderButtonClick = () => {
        const inputAll = document.querySelectorAll('input[data-type="text"]');
        const showError = document.querySelector('.CheckOutItem_error');
        const errorDiv = document.querySelector('.CheckOutItem_error');
        const emptyInputNames = [];
        // Sử dụng Array.from để chuyển đổi NodeList thành mảng và sau đó sử dụng mảng some
        const isEmpty = Array.from(inputAll).map((item) => {
            const isInputEmpty = item.value.trim() === '';
            const isInputText = item.value.trim() !== '';

            if (isInputEmpty) {
                item.style.border = '1px solid #ff3333'; // Thay đổi màu viền thành màu đỏ
                emptyInputNames.push(item.name);
                setTimeout(() => {
                    window.scrollTo({
                        top: 400,
                        behavior: 'smooth',
                    });
                }, 0);
            } else if (isInputText) {
                emptyInputNames.filter((name) => name !== item.name);
                item.style.border = '1px solid #a9a8a8';
            } else {
                window.scrollTo({
                    top: 400,
                    behavior: 'smooth',
                });
            }

            return isInputEmpty;
        });

        if (isEmpty.some((isEmpty) => isEmpty)) {
            const errorText = `<span style="color:#000" >Các trường trống:</span> ${emptyInputNames.join(', ')}`;
            showError.innerHTML = `<span style="color:#ff0000" >${errorText}</span>`;
            errorDiv.style.display = 'block'; // Hiển thị phần div lỗi
        } else {
            errorDiv.style.display = 'none'; // Ẩn phần div lỗi nếu không có lỗi

            window.scrollTo({
                top: 400,
                behavior: 'smooth',
            });

            window.location.href = `/petshop/thanh-cong`;
        }
    };
    return (
        <div className="CheckOutItem">
            <Container>
                <div>
                    <div>
                        <div className="CheckOutItem_sale">
                            <span>Có phiếu giảm giá?</span>
                            <Link>Bấm vào đây để nhập mã của bạn</Link>
                        </div>
                        <div className="CheckOutItem_error"></div>
                    </div>
                    <div className="CheckOutItem_form">
                        <h4>Chi tiết thanh toán</h4>
                        <div className="CheckOutItem_fullname">
                            <label>
                                <h3>
                                    Tên <span className="obligatory">*</span>
                                </h3>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    data-type="text"
                                    type="text"
                                    placeholder="Nhập Tên"
                                    name="Tên"
                                />
                            </label>
                            <label>
                                <h3>
                                    Họ<span className="obligatory">*</span>
                                </h3>
                                <input
                                    onChange={(e) => setHo(e.target.value)}
                                    value={ho}
                                    data-type="text"
                                    type="text"
                                    placeholder="Nhập Họ"
                                    name="Họ"
                                />
                            </label>
                        </div>
                        <label className="CheckOutItem_company">
                            <h3>Tên Công ty (nếu có)</h3>
                            <input type="text" placeholder="Nhập Tên Công Ty" />
                        </label>
                        <div className="CheckOutItem_address">
                            <label className="">
                                <h3>
                                    Tỉnh/Thành phố<span className="obligatory">*</span>
                                </h3>
                                <select onChange={handleCityChange} value={selectedCity}>
                                    <option value="">Chọn tỉnh/thành phố</option>
                                    {cities.map((city) => (
                                        <option key={city.code} value={city.code}>
                                            {city.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label className="">
                                <h3>
                                    Quận/Huyện<span className="obligatory">*</span>
                                </h3>
                                <select onChange={handleDistrictChange} value={selectedDistrict}>
                                    <option value="">Chọn quận/huyện</option>
                                    {Array.isArray(districts) &&
                                        districts.map((district) => (
                                            <option key={district.code} value={district.code}>
                                                {district.name}
                                            </option>
                                        ))}
                                </select>
                            </label>
                            <label className="">
                                <h3>
                                    Xã/Phường<span className="obligatory">*</span>
                                </h3>
                                <select>
                                    <option value="">Chọn xã/phường</option>
                                    {towns.map((town) => (
                                        <option key={town.code} value={town.code}>
                                            {town.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <label className="CheckOutItem_street">
                            <h3>
                                Số/Đường<span className="obligatory">*</span>
                            </h3>
                            <input
                                onChange={(e) => setStreet(e.target.value)}
                                value={street}
                                name="Đường"
                                data-type="text"
                                type="text"
                                placeholder="Số nhà và tên đường"
                            />
                            <input type="text" placeholder="Căn hộ,dãy phòng, đơn vị,v.v(tùy chọn)" />
                        </label>
                        <label className="CheckOutItem_phone">
                            <h3>
                                Số Điện Thoại<span className="obligatory">*</span>
                            </h3>
                            <input
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                name="Số điện thoại"
                                data-type="text"
                                type="number"
                                placeholder="Nhập số điện thoại"
                            />
                        </label>
                        <label className="CheckOutItem_email">
                            <h3>
                                Địa chỉ email<span className="obligatory">*</span>
                            </h3>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                name="email"
                                data-type="text"
                                type="email"
                                placeholder="Nhập email"
                            />
                        </label>
                        <label className="CheckOutItem_note">
                            <h3>Ghi chú đơn hàng</h3>
                            <textarea placeholder="Ghi chú về đơn hàng của bạn." type="text"></textarea>
                        </label>
                    </div>
                </div>
                <div className="CheckOutItem_oder">
                    <h4>Đơn hàng của bạn</h4>
                    <ul className="CheckOutItem_your-oder">
                        {Array.isArray && cart.length > 0
                            ? cart.map((item) => (
                                  <li key={item.id} className="CheckOutItem_product">
                                      <div className="CheckOutItem_product-left">
                                          <div className="CheckOutItem_product-img">
                                              <img src={item ? item.img : ''} />
                                          </div>
                                          <div>
                                              <span>{item ? item.title : ''}</span>x<span>{item ? item.qty : ''}</span>
                                          </div>
                                      </div>

                                      <span className="CheckOutItem_product-price">{item ? item.price : ''}</span>
                                  </li>
                              ))
                            : ''}
                    </ul>
                    <div className="CheckOutItem_total">
                        <h6>Tổng Phụ</h6>
                        <span>{formatCurrency(totalPrice)}</span>
                    </div>
                    <div className="CheckOutItem_total">
                        <h6>Đang Chuyển Hàng</h6>
                        <span>Miễn phí vận chuyển</span>
                    </div>
                    <div className="CheckOutItem_total">
                        <h6>Tổng Cộng</h6>
                        <span>{formatCurrency(totalPrice)}</span>
                    </div>
                    <div className="CheckOutItem_submit">
                        <p>
                            Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn đặt hàng, hỗ trợ trải nghiệm của bạn
                            trên trang web này và cho các mục đích khác được mô tả trong <Link>chính sách bảo mật</Link>
                            của chúng tôi .
                        </p>

                        <button onClick={() => handleOrderButtonClick()}>ĐẶT HÀNG</button>
                    </div>
                </div>
            </Container>
        </div>
    );
}
