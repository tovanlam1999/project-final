import { Link } from 'react-router-dom';
import './Success.css';

export default function Success() {
    return (
        <div className="Success">
            <div className="Success_header">
                <div className="Success_icon">
                    <i class="fa-solid fa-thumbs-up"></i>
                </div>
            </div>
            <div className="Success_body">
                <h3>Cảm ơn bạn !</h3>
                <div className="Success_content">
                    <div className="Success_content-title">
                        <i class="fa-solid fa-check"></i>
                        <h5>Thanh toán được thực hiện thành công</h5>
                    </div>
                    <p>
                        Đơn hàng <Link>335D1g1</Link> của bạn sẽ giao từ 3 đến 5 ngày
                    </p>
                    <div className="Success_body-btn">
                        <button>Chi Tiết Đơn Hàng</button>
                        <Link to={`/petshop/tat-ca-san-pham`}>
                            {' '}
                            <button>Tiếp Tục Mua Hàng</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
