import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
export default function NavBar1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
          <Link  className="navLink" to="/">Home</Link>
          </Typography>
          <Typography variant="h6">
          <Link className="navLink" to="/about">AboutMe</Link>
          </Typography>
          <Typography  variant="h6">
          <Link className="navLink" to="/works">MyWorks</Link>
          </Typography>
          <Typography  variant="h6">
          <Link className="navLink" to="/contacts">Contacts</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
