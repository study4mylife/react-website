import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import {useMediaQuery, useTheme, IconButton} from '@mui/material';
import {Button, styled, Toolbar, AppBar, Box, Drawer, List, ListItem, ListItemText} from '@mui/material';
import { FaIndent, FaHome, FaGamepad, FaNewspaper, FaBookReader} from "react-icons/fa";
import { MdPerson } from "react-icons/md";

function Navbar(){
  const navbarItems = [
    { id: "home", content: (<Box sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center', gap: 1}}>Home<FaHome /></Box>), link: "/" },
    { id: "games", content: (<Box sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center', gap: 1}}>Games<FaGamepad /></Box>), link: "/games" },
    { id: "news", content: (<Box sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center', gap: 1}}>News<FaNewspaper /></Box>), link: "/news" },
    { id: "about", content: (<Box sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center', gap: 1}}>About<FaBookReader /></Box>), link: "/about" },
    { id: "person", content: (<Box sx={{display: {xs: 'none', md: 'flex'}, fontSize: '1.5rem'}}><MdPerson /></Box>), link: "/login"}
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // 螢幕寬度 <= 600px 視為手機

  const [buttonHover, setButtonHover] = useState({});
  const handleMouseEnter = (id) => {
    setButtonHover((prev) => ({ ...prev, [id]: true }));
  };
  const handleMouseLeave = (id) => {
    setButtonHover((prev) => ({ ...prev, [id]: false }));
  };

  const [open , setOpen] = useState(false)
  const NavButton = styled(Button)(({ theme }) => ({
    width: '20%',
    backgroundColor: 'transparent',
    fontSize: '1.05rem',
    fontWeight: 800,
    color: theme.palette.secondary.main,
    margin: '0 24px',
  }));

  useEffect(() => {
    if(!isMobile){
      setOpen(false)
    }
  }, [isMobile])

  return(
  <>
  <AppBar>
    <Toolbar>
        <Box       
        component="a"
        href="#"
        sx={{height: {xs: '48px', md:'100%'}, margin: '10px auto 10px 16px'}}
        >
          <Link to={"/"}>
            <Box         
            component="img"
            src="src/assets/MonsterKey_Logo.png"
            alt="Logo"
            sx={{height: {xs: '48px', md:'56px'}, width: 'auto'}}
          />
          </Link>
        </Box>
          {/* 電腦版選單 */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: 'center'}}>
            {navbarItems.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave(item.id)}
                style={{ textDecoration: "none" }}
              >
                <NavButton>
                  {item.content}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: buttonHover[item.id] ? "100%" : 0 }}
                    transition={{ duration: 0.22 }}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: "1.8px",
                      backgroundImage: "linear-gradient(90deg, #ff7043, #333333)", // 漸層
                    }}
                  />
                </NavButton>
              </Link>
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
            <ListItem 
            key={item.id} 
            onClick={() => setOpen(false)}>
              <Link
                to={item.link}
                key={item.id}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave(item.id)}
                style={{ textDecoration: "none"}}
              >
                <ListItemText 
                primary= {item.content} 
                slotProps={{ primary: {sx: { color: "secondary.main", fontWeight: "800" }}}}/>
              </Link>
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


