import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/p1_book.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Duy Nhất Ngày Hôm Nay</h1>
            <h1>Ưu Đãi Dành Cho Bạn</h1>
            <p>Chỉ Có Duy Nhất Sản Phẩm Này</p>
            <button>Hãy Ghé Thăm</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers