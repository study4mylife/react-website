import {Box, Container, Typography, Button} from '@mui/material';
import banner from '../assets/homeBanner.jpg'

function Banner(){
  return(
  <>
    <Box sx={{ position: 'relative', maxWidth: '100%', maxHeight: 'calc(100vh - 64px)', overflow: 'hidden' }}>
        <Box 
          component="img"
          src={banner}
          alt="2" 
          sx={{width: "100%", height: "auto", objectFit: "cover", filter: "brightness(0.2);" }} 
        />
        <Container 
        maxWidth='md'
        sx={{position: 'absolute', top: '20%', left: '5%'}}>
          <Button 
          variant='contained' 
          sx={{ fontSize: 'clamp(1.2vw, 1.5vw, 3rem);', width: 'fit-content', backgroundColor: 'secondary.main', marginBottom: '12px', boxShadow: '0 0 4px 4px #006064'}}>
            More Info
          </Button>
          <Typography 
          variant='h2'
          sx={{ fontWeight: '400', fontSize: 'clamp(2rem, 3.8vw, 4rem)', color: 'primary.text', letterSpacing: '2.2px', width: '100%'}}>
            Best Website <br />To Find Online Game
          </Typography>
          <Typography
          variant="subtitle1"
          sx={{
            width: '70%',
            fontSize: 'clamp(0.6rem, 1.1vw, 2rem)',
            color: 'primary.text',
            marginTop: '1.2rem',
            lineHeight: '1.5',
            textAlign: 'left', // 確保文字靠左對齊
          }}
          >
            Website For Gamers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit modi, amet ducimus
            tenetur perspiciatis aliquam iusto qui alias omnis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, debitis.
          </Typography>
        </Container>
    </Box>
  </>
  )
}

export default Banner;