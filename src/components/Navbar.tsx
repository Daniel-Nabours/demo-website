import React from "react";
import {  
  IconButton,
  AppBar,
  Menu,
  MenuItem,
  Switch,
  FormControlLabel,
  Toolbar,
  Theme, 
} from "@mui/material"; 
import  { More } from "@mui/icons-material";
import {AccountCircle } from "@mui/icons-material"
import { createStyles, makeStyles } from "@mui/styles"; 
import TemporaryDrawer from "./Drawer";
import heresy from '../heresy.svg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex"
      }
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
  })
);
 

const Navbar = () => {
  const classes = useStyles();  
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton 
          aria-controls="primary-search-account-menu" 
          color="inherit"
          size="large">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const [auth, setAuth] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar> 
            <TemporaryDrawer
              handleChange={handleChange}
              auth={auth}
              setAuth={setAuth}
            />  

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <FormControlLabel
              control={
                <Switch
                  checked={auth}
                  onChange={handleChange} 
                  color="secondary"
                />
              }
              label={auth ? "Disable Heresy" : "Enable Heresy"}
            />
            <IconButton
              edge="end" 
              aria-controls={menuId} 
              onClick={handleProfileMenuOpen}
              color="inherit"
              size="large">
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton 
              aria-controls={mobileMenuId} 
              onClick={handleMobileMenuOpen}
              color="inherit"
              size="large">
              <More />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <div style={{overflow:"hidden"}}> 
        <img className={auth ? "space-marine-in" : "space-marine-out"} alt='a displeased space marine from warhammer 40k slowly peeks at you from the corner of the screen' src={heresy} />
      </div>
    </div>
  );
}

export default Navbar;
