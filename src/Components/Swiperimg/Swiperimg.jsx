import React, { Component } from 'react'
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from 'swiper';







const swiper = new Swiper('.swiper', {
  
  direction: 'horizontal',
  loop: true,
  grabCursor:true,
  slidesPerView:6,
  autoplay: {
      delay: 500,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
    effect: 'flip',
    flipEffect: {
      slideShadows: false,
    },
  speed: 400,
  spaceBetween: 4,
  
});

export default class Swiperimg extends Component {
  render() {
    return (
      <>
<div class="swiper">
  
  <div class="swiper-wrapper">
    
    <div class="swiper-slide"><img src="images/bg-img1.jpg" alt="" /></div>
    <div class="swiper-slide"><img src="images/bg-img2.jpg" alt="" /></div>
    <div class="swiper-slide"><img src="images/bg-img3.jpg" alt="" /></div>
    <div class="swiper-slide"><img src="images/bg-img1.jpg" alt="" /></div>
    <div class="swiper-slide"><img src="images/bg-img2.jpg" alt="" /></div>
    <div class="swiper-slide"><img src="images/bg-img3.jpg" alt="" /></div>
    
  </div>
 
  <div class="swiper-pagination"></div>

 
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  
  <div class="swiper-scrollbar"></div>
</div>
      </>
    )
  }
}


