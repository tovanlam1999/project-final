
import "./Product.css"
import {Link, useParams} from "react-router-dom"
export default function Product(props) {
    const { product } = props;
    
    return (
        <div className="Products">
            <Link to={`/petshop/san-pham/${product.id}`} className="thumb">
                <img src={`${product ? product.img : ''}`} />
                <div className="sub-thumb">
                    <img src={`${product ? product.subimg : ''}`} />
                </div>
                <div className="whitlist">
                    <a><i class="fa-solid fa-link"></i></a>
                    <a><i class="fa-regular fa-clone"></i></a>
                    <a><i class="fa-regular fa-heart"></i></a>
                    <a><i class="fa-solid fa-magnifying-glass"></i></a>
                </div>
            </Link>
            <div className='Products_content'>
                <h3>{product ? product.title : ''}</h3>
                <span>{product ? product.price : ''}</span>
                <div className="review">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
           
        </div>
    );
}
