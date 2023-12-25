import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo1 from '../../assets/images/homepage/Partner/logo1.jpg'
import Logo2 from '../../assets/images/homepage/Partner/logo2.jpg'
import Logo3 from '../../assets/images/homepage/Partner/logo3.jpg'
import Logo4 from '../../assets/images/homepage/Partner/logo4.jpg'
import Logo5 from '../../assets/images/homepage/Partner/logo5.jpg'
import Logo6 from '../../assets/images/homepage/Partner/logo6.jpg'
import Logo7 from '../../assets/images/homepage/Partner/logo7.jpg'


const logos =[
    {
        logo: Logo1,
    },
    {
        logo: Logo2,
    },
    {
        logo: Logo3,
    },
    {
        logo: Logo4,
    },
    {
        logo: Logo5,
    },
    {
        logo: Logo6,
    },
    {
        logo: Logo7,
    },
]

function PartnerSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 1,
        autoplay: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 440,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className='h-28 w-10/12 border-y-2 border-grey-500 my-6 mx-auto'>
        <Slider {...settings}>
            {
                logos.map((l, i) => {
                    return (
                        <div className='flex content-center justify-center pt-5 px-auto mx-0' key={i}>
                            <img key={i} className='h-14 w-aut0 flex justify-center content-center mx-0' src={l.logo} alt="Logos" />
                        </div>
                    )
                })
            }
        
        </Slider>

    </div>
  )
}

export default PartnerSlider