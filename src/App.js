import Home from "./pages/Home/Home";

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ProductDetail from "./pages/productdetail/ProductDetail";
import ListDetail from "./pages/Listdetail/ListDetail";
import Blog from "./pages/blog/Blog";
import Login from "./pages/login/Login";
import Pagecart from "./pages/pagecart/Pagecart";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="petshops/:type" element={<Home />} />
          <Route path="petshop/tat-ca-san-pham/" element={<ListDetail/>} />
          <Route path="petshop/san-pham/:id" element={<ProductDetail/>} />
          <Route path="petshop/tin-tuc/" element={<Blog/>} />
          <Route path="petshop/dang-nhap/" element={<Login/>} />
          <Route path="petshop/gio-hang/" element={<Pagecart/>} />
          <Route path="petshop/tin-tuc/" element={<Blog/>} />
          <Route path="/*" element={<h1>Error Page</h1>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}


