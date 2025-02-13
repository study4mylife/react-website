import { useState } from 'react';
import {useMediaQuery, useTheme, IconButton} from '@mui/material';
import {Button, styled, Toolbar, AppBar, Typography, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import{lightBlue} from '@mui/material/colors';
import { FaIndent } from "react-icons/fa";

function Navbar(){
  const navbarItems = ["Home", "About", "Service", "Contact"];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 螢幕寬度 <= 600px 視為手機
  const [open , setOpen] = useState(false)
  const NavButton = styled(Button)({
    backgroundColor: 'transparent',
    color: 'white',
    margin: '0 10px',
    border: 'none',
  })

  return(
  <>
  <AppBar>
    <Toolbar>
      <Typography variant="h6" sx={{flexGrow: '1'}}>Navbar</Typography>
      {/* 電腦版選單 */}
      <Box sx={{display:{xs: 'none', sm: 'flex'}}}>
        {navbarItems.map((text, index) => (
          <NavButton key={index} variant="text">{text}</NavButton>
        ))}
      </Box>

      {/* 電腦版選單 */}
      {isMobile &&(
        <IconButton onClick={() => setOpen(true)}> 
          <FaIndent color ={lightBlue[100]}/>
        </IconButton>
        )
      }

      {/* 側邊欄選單 */}
      <Drawer anchor='right' open = {open} onClose={() => setOpen(false)} sx={{ width: "400px", "& .MuiDrawer-paper": { width: "400px" } }}>
        <List>
          {navbarItems.map((text, index) => (
            <ListItem key={index} onClick={() => setOpen(false)}>
              <ListItemText sx={{cursor: 'pointer'}}>{text}</ListItemText>
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


