import '../App.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useState } from 'react';

function Home() {
  const [banners, setBanner] = useState([
    "https://daisusilk.vn/wp-content/uploads/2020/03/banner-Ao-Dai-032020-scaled.jpg",
    "https://pubcdn.ivymoda.com/files/news/2023/01/03/chaugia.jpg",
    "https://riccadesign.vn/wp-content/uploads/2021/04/z2428760593208_c072af971319aefff7b63d2461915114.jpg",
  ])

  const [bannerMid, setBannerMid] = useState([
    "https://daisusilk.vn/wp-content/uploads/2020/03/banner-Ao-Dai-032020-scaled.jpg",
    "https://pubcdn.ivymoda.com/files/news/2023/01/03/chaugia.jpg",
    "https://riccadesign.vn/wp-content/uploads/2021/04/z2428760593208_c072af971319aefff7b63d2461915114.jpg",
  ])

  return (
      <div className="body">
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 200 }}
          >
            {banners.length && banners.map(item => {
              return <SwiperSlide><div className='swiper-slide-banner'><img style={{width: '100%'}} src={`${item}`}></img></div></SwiperSlide>
            })}
          </Swiper>
          <div className='collection-container'>
            <div style={{fontWeight: "bold", fontSize: "2rem"}}>Collection</div>
            <div className='home-collections'>
              <div className='collection'>
                <div className='collection-title'>Xuân</div>
                <img className='collection-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8DyeKqdRkRe78ocuLC2a3Qpx329bYg2WWzw&s'></img>
              </div>
              <div className='collection'>
                <div className='collection-title'>Hạ</div>
                <img className='collection-image' src='https://product.hstatic.net/200000265163/product/61dae0b7-4c60-42b8-8bd5-832657b4fa39_7b37084729994fc09b6492cee6ef986d_master.jpg'></img>
              </div>
              <div className='collection'>
                <div className='collection-title'>Thu</div>
                <img className='collection-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3IcQKkPd0UCXQcru6RIFR2gw4XssKSOLcw&s'></img>
              </div>
              <div className='collection'>
                <div className='collection-title'>Đông</div>
                <img className='collection-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vU8LzkWR5nwllUDy2ozt_lnC-Ws0xxMPJQ&s'></img>
              </div>
            </div>
          </div>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 200 }}
          >
            {bannerMid.length && bannerMid.map(item => {
              return <SwiperSlide><div className='swiper-slide-banner'><img style={{width: '100%'}} src={`${item}`}></img></div></SwiperSlide>
            })}
          </Swiper>
          <div className='sales'>
            <div className='sale-item'>
              <div className='sale-image'>
                <img width={40} height={40} src='https://theme.hstatic.net/200000623993/1001008164/14/policies_icon_1.png?v=1395'></img>
              </div>
              <div className='sale-content'>
                <div className='sale-item-title'>
                  Miễn phí vận chuyển cho
                </div>
                <div className='sale-item-title'>
                  hóa đơn từ 2 triệu đồng
                </div>
                <div className='sale-item-content'>
                  Nhận hàng trong vòng 3 ngày
                </div>
              </div>
            </div>
            <div className='sale-item'>
            <div className='sale-image'>
              <img width={40} height={40} src='https://theme.hstatic.net/200000623993/1001008164/14/policies_icon_2.png?v=1395'></img>
              </div>
              <div className='sale-content'>
                <div className='sale-item-title'>
                  Ưu đãi hấp dẫn
                </div>
                <div className='sale-item-content'>
                  Nhiều khuyến mãi hấp dẫn
                </div>
              </div>
            </div>
            <div className='sale-item'>
              <div className='sale-image'>
                <img width={40} height={40} src='https://theme.hstatic.net/200000623993/1001008164/14/policies_icon_4.png?v=1395'></img>
              </div>
              <div className='sale-content'>
                <div className='sale-item-title'>
                  Hotline: 0888 482 886
                </div>
                <div className='sale-item-content'>
                  Đặt hàng nhanh chóng và thuận tiện
                </div>
              </div>
            </div>
          </div>
      </div>
  );
}

export default Home;