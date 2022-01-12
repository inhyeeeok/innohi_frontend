import Swiper from 'swiper';
import SwiperCore, { Navigation,  Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

const SwiperComponents = () => {
  
  SwiperCore.use([Navigation, Pagination, Autoplay ]);

  /**
   * Clients Slider
   */
   new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 60
      },
      995: {
        slidesPerView: 3,
        spaceBetween: 140
      }
    }
  });

 /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

}

export default SwiperComponents;
