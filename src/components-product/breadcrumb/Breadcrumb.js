import './Breadcrumb.css';
import { Link } from 'react-router-dom';
export default function Breadcrumb(props) {
    const { data } = props;

    return (
        <div className="Breadcrumb">
            <h2>{data ? data.headding : 'Tất cả sản phẩm'}</h2>
            <div>
                <Link to={`/`}>Home</Link>/
                <Link> Thức ăn khô</Link>
                <span>/ {data ? data.title : ''}</span>

            </div>
        </div>
    );
}
