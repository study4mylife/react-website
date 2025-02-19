import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {useMediaQuery, useTheme, IconButton} from '@mui/material';
import {Button, styled, Toolbar, AppBar, Box, Drawer, List, ListItem, ListItemText} from '@mui/material';
import { FaIndent} from "react-icons/fa";
import { MdPerson } from "react-icons/md";

function Navbar(){
  const navbarItems = [
    { id: "games", content: "Games", link: "/games" },
    { id: "news", content: "News", link: "/news" },
    { id: "about", content: "About", link: "/about" },
    { id: "contact", content: "Contact", link: "/contact" },
    { id: "person", content: (<Box sx={{display: {xs: 'none', md: 'flex'}, scale: 1.5 }}><MdPerson /></Box>), link: "/login"}
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // 螢幕寬度 <= 600px 視為手機
  const [open , setOpen] = useState(false)
  const NavButton = styled(Button)(({ theme }) => ({
    width: '20%',
    backgroundColor: 'transparent',
    fontSize: '1.05rem',
    fontWeight: 800,
    color: theme.palette.secondary.main,
    margin: '24px',
    border: 'none',
  }));

  useEffect(() => {
    if(!isMobile){
      setOpen(false)
    }
  }, [isMobile])

  return(
  <>
  <AppBar>
    <Toolbar sx={{backgroundColor: 'primary.main'}}>
        <Box       
        component="a"
        href="#"
        sx={{height: '100%', margin: '10px auto 10px 16px'}}
        >
          <Link to={"/"}>
            <Box         
            component="img"
            src="src/assets/MonsterKey_Logo.png"
            alt="Logo"
            sx={{height: '100%', width: {xs: '48px', md: '56px'}}}
          />
          </Link>
        </Box>
      {/* 電腦版選單 */}
      <Box sx={{display: {xs: 'none', md: 'flex'}}} >
        {navbarItems.map((item) => (
          <Link to={item.link} key={item.id}><NavButton>{item.content}</NavButton></Link>
        ))}
      </Box>

      {/* 電腦版選單 */}
      {isMobile &&(
        <IconButton 
        onClick={() => setOpen(true)}
        sx={{color: 'secondary.main'}} > 
          <FaIndent/>
        </IconButton>
        )
      }

      {/* 側邊欄選單 */}
      <Drawer 
      anchor='right' 
      open = {open} 
      onClose={() => setOpen(false)} 
      sx={{ width: "400px", "& .MuiDrawer-paper": { width: "50%", backgroundColor: '#212121' } }}>
        <List>
          {navbarItems.map((item) => (
            <ListItem sx={{fontWeight: 800, color: 'secondary.main', cursor: 'pointer'}} key={item.id} onClick={() => setOpen(false)}>
              <ListItemText>{item.content}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Toolbar>
  </AppBar>
  
  <Toolbar /> {/* AppBar 預設是 position="fixed" 只要在後方再加入 Toolbar即可解決遮擋問題 */}
  </>
  )

}

export default Navbar;


