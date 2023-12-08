import { Link } from 'react-router-dom';
import './Account.css';
import { useEffect, useState } from 'react';

export default function Account() {
    const [useEmail, setUseEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [rePassword, setRePassword] = useState('');
    const [showRegister, setShowRegister] = useState(false);
    const [activeButton, setActiveButton] = useState('login');
    const [showLoginButton, setShowLoginButton] = useState(true);
    const [showRegisterButton, setShowRegisterButton] = useState(true);
    const [activeRegister, setActiveRegister] = useState(true);
    const [isResetPasswordActive, setResetPasswordActive] = useState(true);
    const handleLogin = () => {
        // Thực hiện kiểm tra đơn giản, ví dụ: nếu username và password đều là "admin"
        if (useEmail === 'admin' && password === 'admin') {
            setLoggedIn(true);
            setActiveButton('login');
        } else {
            alert('Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập.');
        }
    };
    const handleRegister = () => {
        // Thực hiện kiểm tra đơn giản, ví dụ: nếu username và password đều là "admin"
        setActiveRegister(false); // Đặt giá trị thành boolean
        if (useEmail === '') {
            alert('Vui lòng nhập email để đăng ký.');
        } else if (password === '' && rePassword === '') {
            alert('Vui lòng nhập mật khẩu để đăng ký.');
        } else if (password === rePassword) {
            setLoggedIn(true);
            setPassWord('');
            setRePassword('');
            setUseEmail('');
            alert('Bạn đã đăng ký thành công.');
            setTimeout(() => {
                handleButtonClick('login');
            }, 1500);
        } else {
            alert('Mật khẩu không trùng khớp vui lòng kiểm tra lại.');
        }
    };

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
        if (buttonType === 'login') {
            setShowRegister(false);
            setShowLoginButton(true);
            setShowRegisterButton(false);
        } else if (buttonType === 'register') {
            setShowRegister(true);
            setShowLoginButton(false);
            setShowRegisterButton(true);
        }
    };
    const handleResetPassword = () => {
        const result = document.querySelectorAll('.Account-login');

        // Lặp qua mỗi phần tử .Account-login và áp dụng logic
        result.forEach((element, index) => {
            if (index === 0) {
                // Thêm class "active" cho phần tử đầu tiên
                element.classList.add('active');
            } else {
                // Xóa class "active" cho các phần tử khác
                element.classList.remove('active');
            }
        });
    };
    const handleReturnLogin = () => {
        const result = document.querySelectorAll('.Account-login');

        // Lặp qua mỗi phần tử .Account-login và áp dụng logic
        result.forEach((element, index) => {
            if (index === 0) {
                // Xóa class "active" cho phần tử đầu tiên
                element.classList.remove('active');
            } else if (index === 1) {
                // Thêm class "active" cho phần tử thứ hai
                element.classList.add('active');
            }
        });
    };

    // Hiển thị nội dung khác nhau dựa trên trạng thái đăng nhập
    useEffect(() => {
        if (isLoggedIn) {
            console.log('Đăng nhập thành công!');
            // Thực hiện các hành động sau khi đăng nhập thành công, ví dụ: chuyển hướng trang
        }
        setActiveRegister(false);
    }, [isLoggedIn]);

    return (
        <div className="Account">
            <div className="Account-login">
                <div className="Account_headding">
                    <button
                        onClick={() => handleButtonClick('login')}
                        className={activeButton === 'login' ? 'active' : ''}
                    >
                        Đăng nhập
                    </button>
                    <button
                        onClick={() => {
                            handleButtonClick('register');
                        }}
                        className={activeButton === 'register' ? 'active' : ''}
                    >
                        Đăng ký
                    </button>
                </div>
                <div className="Account_body">
                    <div>
                        <h6>Email hoặc số điện thoại</h6>
                        <input
                            type="email"
                            placeholder="E-mail hoặc số điện thoại"
                            name="email"
                            autoFocus
                            autoCorrect="off"
                            id="email"
                            required
                            value={useEmail}
                            onChange={(e) => setUseEmail(e.target.value)}
                        />
                    </div>

                    <div className="input_password">
                        <h6>Mật khẩu</h6>
                        <div className="">
                            <input
                                type="password"
                                placeholder="Mật khẩu"
                                name="password"
                                autoFocus
                                autoCorrect="off"
                                id="password"
                                value={password}
                                onChange={(e) => setPassWord(e.target.value)}
                            />
                            <i className="fa-regular fa-eye"></i>
                            <i className="fa-regular fa-eye-slash"></i>
                        </div>
                    </div>

                    {showRegister && (
                        <div className="input_password">
                            <h6>Nhập lại mật khẩu</h6>
                            <div>
                                <input
                                    type="password"
                                    placeholder="Nhập lại mật khẩu"
                                    name="password"
                                    autoFocus
                                    autoCorrect="off"
                                    id="password"
                                    value={rePassword}
                                    onChange={(e) => setRePassword(e.target.value)}
                                />
                                <i className="fa-regular fa-eye"></i>
                                <i className="fa-regular fa-eye-slash"></i>
                            </div>
                        </div>
                    )}
                    <div className="Account_button-footer">
                        {showLoginButton && <button onClick={handleLogin}>Đăng Nhập</button>}
                        {showRegisterButton && (
                            <button onClick={handleRegister} className={activeRegister ? 'active' : ''}>
                                Đăng Ký
                            </button>
                        )}
                    </div>
                    <div className="Account_link">
                        <Link onClick={handleResetPassword}>Quên mật khẩu</Link>
                        <Link to={`/`}>Quay lại cửa hàng</Link>
                    </div>
                </div>
            </div>
            <div className="Account_body Account-login active">
                <div>
                    <h3>Đặt lại mật khẩu của bạn</h3>
                    <p>Chúng tôi sẽ gửi cho bạn một email để đặt lại mật khẩu của bạn.</p>
                </div>
                <input
                    type="email"
                    placeholder="E-mail hoặc số điện thoại"
                    name="email"
                    autoFocus
                    autoCorrect="off"
                    id="email"
                    required
                    value={useEmail}
                    onChange={(e) => setUseEmail(e.target.value)}
                />
                <div className="Account_link">
                    <button>Gửi</button>
                    <Link  onClick={handleReturnLogin}>
                        Quay lại đăng nhập
                    </Link>
                </div>
            </div>
        </div>
    );
}
