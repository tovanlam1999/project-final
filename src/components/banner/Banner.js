import { useEffect, useState } from 'react';
import slider1 from '../../img/slider-1.jpg';
import slider2 from '../../img/slider-2.jpg';
import slider3 from '../../img/slider-3.jpg';

import './Banner.css';

export default function Baner() {
    const [activeBanner, setActiveBanner] = useState(1);

    const nextBanner = () => {
        setActiveBanner((prevBanner) => (prevBanner % 3) + 1);
    };

    const prevBanner = () => {
        setActiveBanner((prevBanner) => ((prevBanner - 2 + 3) % 3) + 1);
    };
    return (
        <div className="banner-wrap">
            <div className={`banner-1 banner  ${activeBanner === 1 ? 'active' : ''}`}>
                <img src={slider1} />
                <div className="thumb-banner">
                    <h3>Chúng tôi nuôi thú cưng để giải trí</h3>
                    <h1>
                        Giúp thú cưng của bạn
                        <br />
                        thoát khỏi những loài gây khó chịu
                    </h1>
                    <button>Mua Ngay</button>
                </div>
            </div>
            <div className={`banner-2 banner  ${activeBanner === 2 ? 'active' : ''}`}>
                <img src={slider2} />
                <div className="thumb-banner two">
                    <h3>Khuyến mại lớn nhất trong năm</h3>
                    <h1>Ưu đãi 35% cho thú cưng phụ kiện</h1>
                    <p>A pellentesque sit amet porttitor eget. Varius sit amet mattis vutate dir fir.</p>
                    <button>Mua Ngay</button>
                </div>
            </div>
            <div className={`banner-3 banner ${activeBanner === 3 ? 'active' : ''}`}>
                <img src={slider3} />
                <div className="thumb-banner three">
                    <h3>Chúng tôi phục vụ những điều tốt nhất</h3>
                    <h1>Làm cho thú cưng của bạn hạnh phúc và giữ sức khỏe</h1>
                    <p> Elementum facilisis leo vel fringilla est ullamcorper eget. Feugiat sed.</p>
                    <button>Mua Ngay</button>
                </div>
            </div>
            <div className="prev">
                <div className="prev-left" onClick={prevBanner}>
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div className="prev-right" onClick={nextBanner}>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            
        </div>
    );
}
