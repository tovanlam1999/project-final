import './BannerLogin.css';
import img1 from '../../img/img-dt.jpg';
import img2 from '../../img/img-gg.jpg';
import img3 from '../../img/img-app.jpg';

export default function BannerLogin() {
    return (
        <div className="BannerLogin_wrap">
            <div className="BannerLogin">
                <div className="BannerLogin_img">
                    <img src={img1} />
                </div>
                <div className="BannerLogin_content">
                    <h2>Ứng dụng cửa hàng</h2>
                    <div>
                        <h4>Tải xuống miễn phí</h4>
                        <span>Ứng dụng của chúng tôi giống như có một người hàng xóm yêu quý thú cưng</span>
                        <p>
                            100% đầy đủ và cân bằng, nhiều loại thức ăn ướt và khô được chế biến từ những nguyên liệu
                            thơm ngon, chất lượng cao, chứa tất cả các chất dinh dưỡng thiết yếu mà mèo của bạn cần.{' '}
                            Điều quan trọng như những gì chúng tôi đưa vào công thức làm món kreme của mình là những gì
                            thú cưng của bạn nhận được...
                        </p>
                        <button>Xem Tất Cả</button>
                        <div className='BannerLogin_app'>
                            <a className="">
                                <img src={img2} />
                            </a>
                            <a className="">
                                <img src={img3} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
