import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import GitHub from "@material-ui/icons/GitHub"
import MoreIcon from "@material-ui/icons/MoreVert"
import { Toolbar } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const styles = (theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    // marginLeft: theme.drawer.width,
    width: `calc(100% - ${theme.drawer.width}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  root: {
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
})

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
    }
  }

  handleMobileMenuOpen = (event) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget })
  }

  render() {
    const { handleChangeNavDrawer, classes, navDrawerOpen } = this.props

    const { anchorEl } = this.state
    const isMenuOpen = Boolean(anchorEl)

    return (
        <div>
          <AppBar
              className={classNames(classes.appBar, {
                [classes.appBarShift]: navDrawerOpen,
              })}
          >
            <Toolbar>
              <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={handleChangeNavDrawer}
              >
                <MenuIcon />
              </IconButton>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <IconButton
                    aria-owns={isMenuOpen ? "material-appbar" : null}
                    aria-haspopup="true"
                    onClick={() =>
                        window.open("https://github.com/lzhan144/Fimance")
                    }
                    color="inherit"
                >
                  <GitHub />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                    aria-haspopup="true"
                    onClick={this.handleMobileMenuOpen}
                    color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </div>
    )
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeNavDrawer: PropTypes.func,
  classes: PropTypes.object,
  navDrawerOpen: PropTypes.bool,
}

export default withStyles(styles)(Header)
