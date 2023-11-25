import { Col, Container, Row ,Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './BlogBody.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import img from '../../img/img-blog.jpg';
import img1 from '../../img/img-blog-1.jpg';
import img2 from '../../img/img-blog-2.jpg';
import img3 from '../../img/img-blog-3.jpg';
import img4 from '../../img/img-blog-4.jpg';
import img5 from '../../img/img-blog-5.jpg';
import Product from '../../components/product/Product';


export default function BlogBody(props) {
    const [data, setData] = useState([]);
    const getData = () => {
        const api = `https://653e66669e8bd3be29df402b.mockapi.io/dog-cat-food/`;
        axios
            .get(api)
            .then((res) => {
                setData(res.data);
            })
            .catch((Error) => {
                console.log('Lỗi khi lấy dữ liệu:', Error);
            });
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="BlogBody">
            <Container>
                <Row>
                    <Col className="col-3">
                        <div className="BlogBody_navbar">
                            <div className="BlogBody_navbar-item">
                                <h5>Recent Articles</h5>
                                <ul>
                                    <li>
                                        <div className="BlogBody_navbar-img">
                                            <img src={img} />
                                        </div>
                                        <div className="BlogBody_navbar-content">
                                            <h6>
                                                <a>Mèo con xinh xắn</a>
                                            </h6>
                                            <p>Muis sed fringilla mauris sit...</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="BlogBody_navbar-img">
                                            <img src={img1} />
                                        </div>
                                        <div className="BlogBody_navbar-content">
                                            <h6>
                                                <a>Đặc sản giống chó Pug</a>
                                            </h6>
                                            <p>Gravida In turpis. Pellentesque pos...</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="BlogBody_navbar-img">
                                            <img src={img2} />
                                        </div>
                                        <div className="BlogBody_navbar-content">
                                            <h6>
                                                <a>How Dogs Smell</a>
                                            </h6>
                                            <p>Sais nam quam nunc, blandit vel,...</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="BlogBody_navbar-img">
                                            <img src={img3} />
                                        </div>
                                        <div className="BlogBody_navbar-content">
                                            <h6>
                                                <a>10 Dog-Friendly Beaches</a>
                                            </h6>
                                            <p>Pris sed aliquam nisi quis porttitor...</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="BlogBody_navbar-img">
                                            <img src={img4} />
                                        </div>
                                        <div className="BlogBody_navbar-content">
                                            <h6>
                                                <a>10 Long Haired Dogs</a>
                                            </h6>
                                            <p>Nbis curabitur ullam ultr nisi. Nam...</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="BlogBody_navbar-item">
                                <h5>Tags</h5>
                                <ul className="BlogBody_categories">
                                    <li>
                                        <a>Beach</a>
                                    </li>
                                    <li>
                                        <a>Birds</a>
                                    </li>
                                    <li>
                                        <a>Breeds</a>
                                    </li>
                                    <li>
                                        <a>Cat</a>
                                    </li>
                                    <li>
                                        <a>Dog</a>
                                    </li>
                                    <li>
                                        <a>Love</a>
                                    </li>
                                    <li>
                                        <a>Pet</a>
                                    </li>
                                    <li>
                                        <a>Puppy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="Sidebar_left-row">
                                <h5>Ưu đãi hấp dẫn</h5>
                                <div className="Sidebar_list-button">
                                    <Row className="NewProduct_row ">
                                        {data.map((item, index) => (
                                            <Col sm="12" md="12">
                                                <Product product={item} index={index} />
                                            </Col>
                                        ))}
                                    </Row>
                                    <div className="prev-green Sidebar_prev">
                                        <div className="prev-left">
                                            <i class="fa-solid fa-chevron-left"></i>
                                        </div>
                                        <div className="prev-right">
                                            <i class="fa-solid fa-chevron-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Sidebar_left-row">
                                <h5>Bán chạy nhất</h5>
                                <div className="Sidebar_list-button">
                                    <div className="Sidebar_card">
                                        <div className="Sidebar_thumb">
                                            <img src={img1} />

                                            <a className="Sidebar_sub-thumb">
                                                <img src={img} />
                                            </a>
                                        </div>
                                        <div className="Sidebar_content">
                                            <h3>Phả Chảy</h3>
                                            <span>300.000đ</span>
                                            <div className="review">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Sidebar_card">
                                        <div className="Sidebar_thumb">
                                            <img src={img2} />

                                            <a className="Sidebar_sub-thumb">
                                                <img src={img3} />
                                            </a>
                                        </div>
                                        <div className="Sidebar_content">
                                            <h3>Công thức dành cho chó con</h3>
                                            <span>250.000đ</span>
                                            <div className="review">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Sidebar_card">
                                        <div className="Sidebar_thumb">
                                            <img src={img4} />

                                            <a className="Sidebar_sub-thumb">
                                                <img src={img5} />
                                            </a>
                                        </div>
                                        <div className="Sidebar_content">
                                            <h3>Cá Ngừ & Cá Hồi</h3>
                                            <span>320.000đ</span>
                                            <div className="review">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-9">
                        <Row className="BlogBody_row">
                            <Col className="BlogBody_col-item col-4">
                                <div className="BlogBody_col-item-img">
                                    <img src={img} />
                                </div>
                                <div className="BlogBody_col-item-content">
                                    <h4>
                                        {' '}
                                        <a>Pretty Little Kitten</a>
                                    </h4>
                                    <div className="time">
                                        <i class="fa-regular fa-calendar-days"></i>
                                        <time>July 1 , 2019</time>
                                    </div>
                                    <p>
                                        Muis sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
                                        consequat, leo eget bibendum sodales, augue velit cursus nunc, quis grav...
                                    </p>
                                    <div className="BlogBody_col-item-link">
                                        <i class="fa-solid fa-link"></i>
                                        <a>Pet,</a>
                                        <a>Puppy</a>
                                    </div>
                                </div>
                                <div className="BlogBody_col-item-commemt">
                                    <div className="commemt-item">
                                        <i class="fa-regular fa-comment-dots"></i>
                                        <span>2 comments </span>
                                    </div>
                                    <span>|</span>
                                    <div className="commemt-item">
                                        <i class="fa-regular fa-circle-user"></i>
                                        <span>By Ram M</span>
                                    </div>
                                </div>
                            </Col>
                            <Col className="BlogBody_col-item col-4">
                                <div className="BlogBody_col-item-img">
                                    <img src={img1} />
                                </div>
                                <div className="BlogBody_col-item-content">
                                    <h4>
                                        {' '}
                                        <a> Pug Breed Specialties</a>
                                    </h4>
                                    <div className="time">
                                        <i class="fa-regular fa-calendar-days"></i>
                                        <time>July 1 , 2019</time>
                                    </div>
                                    <p>
                                        Gravida In turpis. Pellentesque pos praesent turpis. Aenean posuere, tortor sed
                                        cursus feugiat nunc augue blandit nunc eu sollicitudin urna dolor s...
                                    </p>
                                    <div className="BlogBody_col-item-link">
                                        <i class="fa-solid fa-link"></i>
                                        <a>Pet,</a>
                                        <a>Puppy</a>
                                    </div>
                                </div>
                                <div className="BlogBody_col-item-commemt">
                                    <div className="commemt-item">
                                        <i class="fa-regular fa-comment-dots"></i>
                                        <span>2 comments </span>
                                    </div>
                                    <span>|</span>
                                    <div className="commemt-item">
                                        <i class="fa-regular fa-circle-user"></i>
                                        <span>By Ram M</span>
                                    </div>
                                </div>
                            </Col>
                            <Col className="BlogBody_col-item col-4">
                                <div className="BlogBody_col-item-img">
                                    <img src={img2} />
                                </div>
                                <div className="BlogBody_col-item-content">
                                    <h4>
                                        {' '}
                                        <a> How Dogs Smell</a>
                                    </h4>
                                    <div className="time">
                                        <i class="fa-regular fa-calendar-days"></i>
                                        <time>July 1 , 2019</time>
                                    </div>
                                    <p>
                                        Sais nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas
                                        nec odio et ante tincidunt tempus. Donec vitae sapien ut libero ven...
                                    </p>
                                    <div className="BlogBody_col-item-link">
                                        <i class="fa-solid fa-link"></i>
                                        <a>Pet,</a>
                                        <a>Puppy</a>
                                    </div>
                                </div>
                                <div className="BlogBody_col-item-commemt">
                                    <div className="commemt-item">
                                        <i class="fa-regular fa-comment-dots"></i>
                                        <span>2 comments </span>
                                    </div>
                                    <span>|</span>
                                    <div className="commemt-item">
                                        <i class="fa-regular fa-circle-user"></i>
                                        <span>By Ram M</span>
                                    </div>
                                </div>
                            </Col>
                            <Col className="BlogBody_col-item col-4">
                                <div className="BlogBody_col-item-img">
                                    <img src={img3} />
                                </div>
                                <div className="BlogBody_col-item-content">
                                    <h4>
                                        {' '}
                                        <a> 10 Dog-Friendly Beaches</a>
                                    </h4>
                                    <div className="time">
                                        <i class="fa-regular fa-calendar-days"></i>
                                        <time>July 1 , 2019</time>
                                    </div>
                                    <p>
                                        Pris sed aliquam nisi quis porttitor congue, elit erat euismod orci, ac placerat
                                        dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Ae...
                                    </p>
                                    <div className="BlogBody_col-item-link">
                                        <i class="fa-solid fa-link"></i>
                                        <a>Pet,</a>
                                        <a>Puppy</a>
                                    </div>
                                </div>
                                <div className="BlogBody_col-item-commemt">
                                    <div className="commemt-item">
                                        <i class="fa-regular fa-comment-dots"></i>
                                        <span>2 comments </span>
                                    </div>
                                    <span>|</span>
                                    <div className="commemt-item">
                                        <i class="fa-regular fa-circle-user"></i>
                                        <span>By Ram M</span>
                                    </div>
                                </div>
                            </Col>
                            <Col className="BlogBody_col-item col-4">
                                <div className="BlogBody_col-item-img">
                                    <img src={img4} />
                                </div>
                                <div className="BlogBody_col-item-content">
                                    <h4>
                                        {' '}
                                        <a> 10 Long Haired Dogs</a>
                                    </h4>
                                    <div className="time">
                                        <i class="fa-regular fa-calendar-days"></i>
                                        <time>July 1 , 2019</time>
                                    </div>
                                    <p>
                                        Nbis curabitur ullam ultr nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
                                        tellus eget condimentum rhoncus, sem quam semper libero, sit amet adi...
                                    </p>
                                    <div className="BlogBody_col-item-link">
                                        <i class="fa-solid fa-link"></i>
                                        <a>Pet,</a>
                                        <a>Puppy</a>
                                    </div>
                                </div>
                                <div className="BlogBody_col-item-commemt">
                                    <div className="commemt-item">
                                        <i class="fa-regular fa-comment-dots"></i>
                                        <span>2 comments </span>
                                    </div>
                                    <span>|</span>
                                    <div className="commemt-item">
                                        <i class="fa-regular fa-circle-user"></i>
                                        <span>By Ram M</span>
                                    </div>
                                </div>
                            </Col>
                            <Col className="BlogBody_col-item col-4">
                                <div className="BlogBody_col-item-img">
                                    <img src={img5} />
                                </div>
                                <div className="BlogBody_col-item-content">
                                    <h4>
                                        {' '}
                                        <a> 5 Low Maintenance Pet Bird Species</a>
                                    </h4>
                                    <div className="time">
                                        <i class="fa-regular fa-calendar-days"></i>
                                        <time>July 1 , 2019</time>
                                    </div>
                                    <p>
                                        Muis sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
                                        consequat, leo eget bibendum sodales, augue velit cursus nunc, quis grav...
                                    </p>
                                    <div className="BlogBody_col-item-link">
                                        <i class="fa-solid fa-link"></i>
                                        <a>Pet,</a>
                                        <a>Puppy</a>
                                    </div>
                                </div>
                                <div className="BlogBody_col-item-commemt">
                                    <div className="commemt-item">
                                        <i class="fa-regular fa-comment-dots"></i>
                                        <span>2 comments </span>
                                    </div>
                                    <span>|</span>
                                    <div className="commemt-item">
                                        <i class="fa-regular fa-circle-user"></i>
                                        <span>By Ram M</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Pagination>
                    <PaginationItem>
                        <PaginationLink href="#" previous />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="#" next />
                    </PaginationItem>
                </Pagination>
            </Container>
        </div>
    );
}
