import { useState } from 'react';
import {useMediaQuery, useTheme, IconButton} from '@mui/material';
import {Button, styled, Toolbar, AppBar, Typography, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import{lightBlue} from '@mui/material/colors';
import { FaIndent } from "react-icons/fa";

function Navbar(){
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
  <AppBar>
    <Toolbar>
      <Typography variant="h6" sx={{flexGrow: '1'}}>Navbar</Typography>
      {/* 電腦版選單 */}
      <Box sx={{display:{xs: 'none', sm: 'flex'}}}>
        <NavButton variant="text">Hello world</NavButton>
        <NavButton variant="text">Hello world</NavButton>
        <NavButton variant="text">Hello world</NavButton>
        <NavButton variant="text">Hello world</NavButton>
        <NavButton variant="text">Hello world</NavButton>
      </Box>

      {/* 電腦版選單 */}
      {isMobile &&(
        <IconButton onClick={() => setOpen(true)}> 
          <FaIndent color ={lightBlue[100]}/>
        </IconButton>
        )
      }

      {/* 側邊欄選單 */}
      <Drawer anchor='right' open = {open} sx={{ width: "400px", "& .MuiDrawer-paper": { width: "400px" } }}>
        <List>
          <ListItem onClick={()=> setOpen(false)}>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem onClick={()=> setOpen(false)}>
            <ListItemText>About</ListItemText>
          </ListItem>
          <ListItem onClick={()=> setOpen(false)}>
            <ListItemText>Service</ListItemText>
          </ListItem>
          <ListItem onClick={()=> setOpen(false)}>
            <ListItemText>Contact</ListItemText>
          </ListItem>
        </List>
      </Drawer>


    </Toolbar>
  </AppBar>
  )

}

export default Navbar;


