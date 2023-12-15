import { Container } from 'reactstrap';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
export default function Navbar(props) {
    const { data } = props;
    const [changeColor, setChangeColor] = useState(null);
    const [selectedLink, setSelectedLink] = useState('');
    const location = useLocation();

    const handle_Click = (index, linktext) => {
        setChangeColor(index);
        setSelectedLink(linktext);

        const newPath = index !== null ? `${location.pathname}?active=${index}` : location.pathname;
        if (window.history && window.history.pushState) {
            window.history.pushState({ path: newPath }, '', newPath);
        }
    };

    const getLinkTextByIndex = (index) => {
        switch (index) {
            case 0:
                return 'Trang Chủ';
            case 1:
                return 'Dịch vụ';
            case 2:
                return 'Tất cả sản phẩm';
            case 3:
                return 'Về chúng tôi';
            case 4:
                return 'Tin tức';
            case 5:
                return 'Liên hệ';
            default:
                return '';
        }
    };
    // khi location.pathname nay thay đổi useEffect sẽ chạy
    useEffect(() => {
        const pathname = location.pathname;
        switch (pathname) {
            case '/':
                setChangeColor(0);
                break;
            case '/petshop/dich-vu':
                setChangeColor(1);
                break;
            case '/petshop/san-pham':
                setChangeColor(2);
                break;
            case '/petshop/ve-chung-toi':
                setChangeColor(3);
                break;
            case '/petshop/tin-tuc':
                setChangeColor(4);
                break;
            case '/petshop/lien-he':
                setChangeColor(5);
                break;

            default:
                setChangeColor(null);
        }
    }, [location.pathname]);
    useEffect(() => {
        // Thêm class 'active' cho thẻ <a> khi changeColor có giá trị
        if (changeColor !== null) {
            const navbarList = document.querySelectorAll('.navbar_list li');

            navbarList.forEach((item, index) => {
                if (index === changeColor) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
        // setSelectedLink(getLinkTextByIndex(activeIndex));
    }, [changeColor]);
    useEffect(() => {
        // Lấy giá trị của query parameter từ URL
        const urlParams = new URLSearchParams(window.location.search);
        const activeIndex = parseInt(urlParams.get('active'), 10);

        // Cập nhật trạng thái nếu có giá trị từ query parameter
        if (!isNaN(activeIndex) && activeIndex >= 0 && activeIndex <= 5) {
            setChangeColor(activeIndex);
            setSelectedLink(getLinkTextByIndex(activeIndex)); // Đảm bảo cập nhật nội dung Link
        } else {
            setChangeColor(null);
        }
    }, [location.pathname]);
    return (
        <div className="wrap">
            <Container className="navbar_main">
                <ul className="navbar_list">
                    <li className={changeColor === 0 ? 'active' : ''} onClick={() => handle_Click(0)}>
                        <Link to={`/`}>Trang Chủ</Link>
                    </li>
                    <li className={changeColor === 1 ? 'active' : ''} onClick={() => handle_Click(1, 'Dịch vụ')}>
                        <Link to={`/petshop/dich-vu/`}>Dịch vụ</Link>
                    </li>
                    <li
                        className={` active${changeColor === 2 ? 'active' : ''}`}
                        onClick={() => handle_Click(2, 'Tất cả sản phẩm')}
                    >
                        <Link to={`/petshop/tat-ca-san-pham/`}>Sản Phẩm</Link>
                    </li>
                    <li className={changeColor === 3 ? 'active' : ''} onClick={() => handle_Click(3, 'Về chúng tôi')}>
                        <Link to={`/petshop/ve-chung-toi/`}>Về chúng tôi</Link>
                    </li>
                    <li className={changeColor === 4 ? 'active' : ''} onClick={() => handle_Click(4, 'Tin tức')}>
                        <Link to={`/petshop/tin-tuc/`}>Tin Tức</Link>
                    </li>
                    <li className={changeColor === 5 ? 'active' : ''} onClick={() => handle_Click(5, 'Liên hệ')}>
                        <Link to={`/petshop/lien-he`}>Liên Hệ</Link>
                    </li>
                </ul>
            </Container>
            <div className="Breadcrumb">
                <h2>{data ? data.title : ''}</h2>
                <div>
                    <Link to={`/`}>Home</Link>/<Link>{data ? data.title : ''}</Link>
                    {/* <span>/ {data ? data.title : ''}</span> */}
                </div>
            </div>
        </div>
    );
}
