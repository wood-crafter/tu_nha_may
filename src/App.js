import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './views/Home';
import Product from './views/products';
import { useState } from 'react';
import ScrollToTop from "react-scroll-to-top";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={(
        <Home />
        )} />
      <Route path="/products/*" element={(
        <Product />
        )} />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}

const springCollectionPath = [
  'https://product.hstatic.net/1000392326/product/bda50150_-_chua_co_gia_bdq50139-558k__4__96c934460a5d44569c030d5b57d3668c_1024x1024.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3cXrVaYMTHlov_ItX6F_ABvdDSdf2hz4jA&s'
]

const summerCollectionPath = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLUlV2v3y2pV34vjgZ3dMccv8c0kOspoKSHA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQFpoknV71Lek_hCvwLcKg8vagw0pjDcedQ&s'
]

const fallCollectionPath = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3IcQKkPd0UCXQcru6RIFR2gw4XssKSOLcw&s',
  'https://down-vn.img.susercontent.com/file/vn-11134201-23020-p5qizro12jnvf1'
]

const winterCollectionPath = [
  'https://bizweb.dktcdn.net/100/414/042/products/dsc06774-2.jpg?v=1683969121643',
  'https://bizweb.dktcdn.net/100/236/196/products/8-1-44ee1440-f558-4e18-b133-78d956d9b559.jpg?v=1667528700197'
]

function App() {
  const [isShowingCollection, setIsShowingCollection] = useState(false)
  const [collectionPaths, setCollectionPaths] = useState([
  'https://media-cdn-v2.laodong.vn/Storage/newsportal/2018/2/9/590907/J1.jpg',
  'https://kenh14cdn.com/203336854389633024/2022/12/24/photo-22-16718773627791873791975.jpeg'
  ])
  return (
    <Router>
      <div className='App'>
        <ScrollToTop smooth color="black" />
        <div className="header">
          <a href='/home'>Tủ nhà mây</a>
          <div className="menu"
            onMouseLeave={() => setIsShowingCollection(false)}
          >
            <a>Trang chủ</a>
            <a href='/products'
            onMouseEnter={() => setIsShowingCollection(true)}
            >
              Sản phẩm &#9663;
              {
                isShowingCollection && 
                <div className='collection-options'>
                  <div className='image-cards'>
                    <div className='image-card'>
                      <img src={collectionPaths[0]}></img>
                    </div>
                    <div className='image-card'>
                      <img src={collectionPaths[1]}></img>
                    </div>
                  </div>
                  <div className='collections'>
                    <a href='/products/spring'
                      onMouseEnter={() => setCollectionPaths(springCollectionPath)}
                    >Xuân</a>
                    <a href='/products/summer'
                      onMouseEnter={() => setCollectionPaths(summerCollectionPath)}
                    >Hạ</a>
                    <a href='/products/fall'
                      onMouseEnter={() => setCollectionPaths(fallCollectionPath)}
                    >Thu</a>
                    <a href='/products/winter'
                      onMouseEnter={() => setCollectionPaths(winterCollectionPath)}
                    >Đông</a>
                  </div>
                </div>
              }
            </a>
            <a>Giỏ hàng</a>
            <a>Thanh toán</a>
            <a>Giới thiệu</a>
          </div>
        </div>
        <AppRoutes />
        <div className="footer">
          <div className="link-items-container">
            <div className="link-items">
              <div className="links">Địa chỉ: 110 Thái Hà, Đống Đa, Hà Nội</div>
              <div className="links">Số điện thoại: 0888 482 886</div>
              <div className="links">Email: cskh@magonn.com</div>
              <div className="links">© Bản quyền thuộc về công ty TNHH Chi An</div>
            </div>
            <div className="link-items">
              <div className="links">Chính sách</div>
              <div className="links">Hệ thống cửa hàng</div>
              <div className="links">Hướng dẫn mua hàng</div>
              <div className="links">Chính sách mua hàng</div>
              <div className="links">Chính sách thẻ khách hàng thân thiết</div>
              <div className="links">Chính sách bảo mật thông tin khách hàng</div>
            </div>
            <div className="link-items">
              <div className="links">HỖ TRỢ KHÁCH HÀNG</div>
              <div className="links">Chính sách mua hàng</div>
              <div className="links">Hướng dẫn mua hàng</div>
              <div className="links">Chính sách thẻ khách hàng thân thiết</div>
              <div className="links">Hệ thống cửa hàng</div>
            </div>
            <div className="link-items">
              <div className="links">ĐĂNG KÝ NHẬN TIN</div>
              <div className="links">Nhập email</div>
              <div className="links" style={{color: "red"}}>Logos - add later</div>
            </div>
          </div>
          <div className="about-image">
            <img class="img-fluid" src="//theme.hstatic.net/200000623993/1001008164/14/logo_bct.png?v=1395" width="350" alt="Logo bộ công thương" style={{marginRight: "2rem"}}/>
            <img class=" img-fluid" src="//theme.hstatic.net/200000623993/1001008164/14/footer_trustbadge.jpg?v=1395" alt="Phương thức thanh toán" style={{marginLeft: "2rem"}}></img>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
