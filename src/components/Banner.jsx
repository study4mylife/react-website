import {Box, Typography} from '@mui/material';

function Banner(){
  return(
  <>
    <Box sx={{ position: 'relative', maxWidth: '100%', maxHeight: 'calc(100vh - 64px)', overflow: 'hidden' }}>
        <Box 
          component="img" 
          src="../src/assets/homeBanner.jpg" 
          alt="2" 
          sx={{width: "100%", height: "auto", objectFit: "cover", filter: "brightness(0.25);" }} 
        />
        <Typography 
        variant='h2'
        sx={{ position: 'absolute', top: '35%', left: '15%', textAlign: 'center', fontSize: 'clamp(1rem, 4vw, 6rem);' , color: 'primary.text' }}>
          Explore your perfect champion & agent
          <Typography 
          variant='subtitle1'
          sx={{ fontSize: '1.2rem', marginTop: '8px' }}>
            Website For League Of Legend & Valorant Gamer
          </Typography>
        </Typography>
    </Box>
  </>
  )
}

export default Banner;