import PropTypes from 'prop-types';
import { useTheme, useMediaQuery } from '@mui/material';
import {Container, Card, Button, Typography} from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Slider from "react-slick";

function ImgMediaCard(props) {
    const { src, alt } = props;
    return (
      <Card sx={{ margin: "0 30px"}}>
        <CardMedia
          component="img"
          alt={alt}
          image={src}
          sx={{ width: "100%", height: "auto", objectFit: "cover" }} 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }

  ImgMediaCard.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };

function CenterMode() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // 判斷是否是手機版
    const settings = {
      infinite: true,
      slidesToShow: isMobile ? 1 : 3,
      speed: 500,
    };

    const images = [
        {
            img: "src/assets/pexels-life-of-pix-7919.jpg",
            title: "Image",
        },
        {
            img: "src/assets/pexels-life-of-pix-7919.jpg",
            title: "Image",
    
        },
        {
            img: "src/assets/pexels-life-of-pix-7919.jpg",
            title: "Image",
        },
        {
            img: "src/assets/pexels-life-of-pix-7919.jpg",
            title: "Image",
    
        },
        {
            img: "src/assets/pexels-life-of-pix-7919.jpg",
            title: "Image",
        },
        ];

    return (
      <div className="slider-container" style={{ width: "100%", overflow: "hidden" }}>
        <Slider {...settings}>
            {images.map((item, index) => (
                <ImgMediaCard
                src={item.img}
                alt= {item.title}
                key={index}
                >
                </ImgMediaCard>
            ))}
        </Slider>
      </div>
    );
  }

function Introduce() {
    return (
        <>
        <CenterMode></CenterMode>
        <Container sx={{textAlign: 'center'}}>
            <p>11</p>

        </Container>
        </>
    );

}

export default Introduce;
