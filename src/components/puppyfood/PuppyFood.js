import './PuppyFood.css';
import {Row,Col} from "reactstrap"
import img from '../../img/puppyfood.jpg';
import img1 from '../../img/puppyfood-1.jpg';
import img2 from '../../img/puppyfood-2.jpg';
import img3 from '../../img/puppyfood-3.jpg';
import img4 from '../../img/puppyfood-4.jpg';
import img5 from '../../img/puppyfood-5.jpg';
import img6 from '../../img/puppyfood-6.jpg';

export default function PuppyFood() {
    return (
        <div className="PuppyFood">
            <div className="border-animation">
                    <h2>@PuppyFood</h2>
                    <span className="border-top"></span>
                    <span className="border-right"></span>
                    <span className="border-bottom"></span>
                    <span className="border-left"></span>
                </div>
            <div className="PuppyFood_wrap">
                <Row sm="6" md="5" className='PuppyFood_row'>
                    <Col className='PuppyFood_col'>
                        <div className="PuppyFood_item">
                            <img src={img} />
                            <div className="PuppyFood_thumb">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                    </Col>
                    <Col className='PuppyFood_col'>
                        <div className="PuppyFood_item">
                            <img src={img1} />
                            <div className="PuppyFood_thumb">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                    </Col>
                    <Col className='PuppyFood_col'>
                        <div className="PuppyFood_item">
                            <img src={img2} />
                            <div className="PuppyFood_thumb">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                    </Col>
                    <Col className='PuppyFood_col'>
                        <div className="PuppyFood_item">
                            <img src={img3} />
                            <div className="PuppyFood_thumb">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                    </Col>
                    <Col className='PuppyFood_col'>
                        <div className="PuppyFood_item">
                            <img src={img4} />
                            <div className="PuppyFood_thumb">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                    </Col>
                    <Col className='PuppyFood_col'>
                        <div className="PuppyFood_item">
                            <img src={img5} />
                            <div className="PuppyFood_thumb">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                    </Col>
                    <Col className='PuppyFood_col'>
                        <div className="PuppyFood_item">
                            <img src={img6} />
                            <div className="PuppyFood_thumb">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
