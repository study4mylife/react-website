import {Box} from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Carousel(){
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => (
        <Box className="custom-dot"/>
      ),
      dotsClass: "slick-dots custom-dots", // 用來修改 Slick 預設樣式
    };

  return(
  <>
    <Box sx={{ maxWidth: '100%', overflow: 'hidden' }}>
      <Slider {...carouselSettings}>
        <Box 
          component="img" 
          src="src/assets/pexels-life-of-pix-7919.jpg" 
          alt="1" 
          sx={{ width: "100%", height: "auto", objectFit: "cover" }} 
        />
        <Box 
          component="img" 
          src="src/assets/pexels-life-of-pix-7919.jpg" 
          alt="2" 
          sx={{ width: "100%", height: "auto", objectFit: "cover" }} 
        />
        <Box 
          component="img" 
          src="src/assets/pexels-life-of-pix-7919.jpg" 
          alt="3" 
          sx={{ width: "100%", height: "auto", objectFit: "cover" }} 
        />
      </Slider>
    </Box>
  </>
  )

}

export default Carousel;