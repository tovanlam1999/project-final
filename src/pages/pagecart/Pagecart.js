// import axios from 'axios';
// import ShoppingCart from '../../components-product/shoppingcart/ShoppingCart';
// import Footer from '../../components/footer/Footer';
// import Header from '../../components/header/Header';
// import Navbar from '../../components/navbar/Navbar';
// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import Breadcrumb from '../../components-product/breadcrumb/Breadcrumb';

// export default function Pagecart(props) {
//     const [data, setData] = useState();
//     const { id } = useParams();
//     const getData = () => {
//         const api = `https://653e66669e8bd3be29df402b.mockapi.io/dog-cat-food/${id}`;
//         axios
//             .get(api)
//             .then((res) => {
//                 setData(res.data);
//             })
//             .catch((Error) => {
//                 console.log(Error);
//             });
//     };

//     useEffect(() => {
//         getData();
//     }, []);

//     console.log(data);
//     return (
//         <div>
//             <Header />
//             <Navbar />
//             <Breadcrumb/>
//             <ShoppingCart data={data} />
//             <Footer />
//         </div>
//     );
// }
