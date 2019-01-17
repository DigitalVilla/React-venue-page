import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import  SideMenu from './SideMenu' ;

const styles = {
  root: {
    flexGrow: 1,
  }
};


class Header extends Component{

  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
      bgVisible: false
    }
    this.classes = props;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({bgVisible: true})
    } else {
      this.setState({bgVisible: false})
    }
  }
  toggleMenu = (value) => {
    this.setState({menuOpen: value})
  }


render () {
  return (
    <div className={this.classes.root}>
      <AppBar position="fixed" id="navbar" style={{
        background: this.state.bgVisible ? 'rgba(19, 76, 102, .8)': 'none',
        boxShadow:"none",
        padding:"0px 0px"
      }}>
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">Digital Villa</div>
            <div className="header_logo_title">Passion for the extraordinary</div>
          </div>
    
          <IconButton className={this.classes.menuButton}
            onClick={() => this.toggleMenu(true)}
            color="inherit"
            aria-label="Menu">
            <MenuIcon />
          </IconButton>
         
          <SideMenu id="sideMenu"
            open = {this.state.menuOpen}
            onClose= {(value) => this.toggleMenu(value)}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);