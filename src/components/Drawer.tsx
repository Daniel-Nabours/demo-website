import React from "react";  
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  Switch,
  FormControlLabel,
  ListItemText,
  Theme
} from "@mui/material";
import {makeStyles, createStyles} from "@mui/styles"

import {Announcement, Favorite, Menu, Apps} from "@mui/icons-material";  
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    },
    menuButton: {
      marginRight: theme.spacing(1)
    }
  })
);

type Anchor = "top" | "left" | "bottom" | "right";

interface DrawerProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const TemporaryDrawer:React.FC<DrawerProps> = ({ handleChange, auth, setAuth, ...props}) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={"top"}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <Apps />
          </ListItemIcon>
          <ListItemText>Product</ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem button>
          <ListItemIcon>
            <Announcement />
          </ListItemIcon>
          <ListItemText>Lorem</ListItemText>
        </ListItem>
      </List>

      <List>
        <ListItem button>
          <ListItemIcon>
            <Favorite />
          </ListItemIcon>
          <ListItemText>Ipsum</ListItemText>
        </ListItem>
      </List>

      <List>
        <ListItem button>
          <ListItemIcon>
            <List />
          </ListItemIcon>
          <ListItemText>Dolor</ListItemText>
        </ListItem>
      </List>

      <List>
        <ListItem>
          <ListItemText>
            <FormControlLabel
              control={
                <Switch
                  checked={auth}
                  onChange={handleChange} 
                />
              }
              label={auth ? "Disable Heresy" : "Enable Heresy"}
            />
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {(["left"] as Anchor[]).map(anchor => (
        <React.Fragment key={anchor}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(anchor, true)}
          >
            <Menu />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default TemporaryDrawer