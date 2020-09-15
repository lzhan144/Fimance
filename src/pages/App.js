import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Header from "../components/frame/Header";
import LeftDrawer from "../components/frame/LeftDrawer";
import Data from "../data";
import Dashboard from "./DashboardPage";
import Category from "./Category"
import Transaction from "./Transaction"
import ButtonBase from "@material-ui/core/ButtonBase";
import { ThemeProvider } from "@material-ui/core/styles";
import defaultTheme, { customTheme } from "../theme";
import AddCategory from "./AddCategory";
import AddTransaction from "./AddTransaction";
import FinancialReport from "./FinancialReport";
import DataTable from "./ModifyCategory";
import CategoryForm from "./CategoryForm";
import NameForm from "./NameForm";
import GetData from "./GetData";

const styles = () => ({
  container: {
    margin: "80px 20px 20px 15px",
    paddingLeft: defaultTheme.drawer.width,
    [defaultTheme.breakpoints.down("sm")]: {
      paddingLeft: 0
    }
    // width: `calc(100% - ${defaultTheme.drawer.width}px)`
  },
  containerFull: {
    paddingLeft: defaultTheme.drawer.miniWidth,
    [defaultTheme.breakpoints.down("sm")]: {
      paddingLeft: 0
    }
  },
  settingBtn: {
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "white",
    width: 48,
    right: 0,
    height: 48,
    opacity: 0.9,
    padding: 0,
    zIndex: 999,
    position: "fixed",
    minWidth: 48,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    // nav bar default open in desktop screen, and default closed in mobile screen
    this.state = {
      theme: defaultTheme,
      rightDrawerOpen: false,
      navDrawerOpen:
          window && window.innerWidth && window.innerWidth >= defaultTheme.breakpoints.values.md
              ? true
              : false
    };

    this.handleChangeRightDrawer = this.handleChangeRightDrawer.bind(this);
    this.handleChangeNavDrawer = this.handleChangeNavDrawer.bind(this);
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
  }

  handleChangeNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  handleChangeRightDrawer() {
    this.setState({
      rightDrawerOpen: !this.state.rightDrawerOpen
    });
  }

  handleChangeTheme(colorOption) {
    const theme = customTheme({
      palette: colorOption
    });
    this.setState({
      theme
    });
  }

  render() {
    const { classes } = this.props;
    const { navDrawerOpen, theme } = this.state;

    return (
        <ThemeProvider theme={theme}>
          <Header handleChangeNavDrawer={this.handleChangeNavDrawer} navDrawerOpen={navDrawerOpen} />

          <LeftDrawer
              navDrawerOpen={navDrawerOpen}
              handleChangeNavDrawer={this.handleChangeNavDrawer}
              menus={Data.menus}
          />
          <ButtonBase
              color="inherit"
              classes={{ root: classes.settingBtn }}
              onClick={this.handleChangeRightDrawer}
          >
            <i className="fa fa-cog fa-3x" />
          </ButtonBase>
          <div className={classNames(classes.container, !navDrawerOpen && classes.containerFull)}>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/category" component={Category} />
              <Route path="/transaction" component={Transaction} />
              <Route path="/table" component={DataTable} />
              <Route path="/Addcategory" component={AddCategory} />
              <Route path="/Modifycategory" component={CategoryForm} />
              <Route path="/Addtransaction" component={AddTransaction} />
              <Route path="/Financialreport" component={FinancialReport} />
              <Route path="/form" component={NameForm} />
              <Route path="/getdata" component={GetData} />

            </Switch>
          </div>
        </ThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.object
};

export default withStyles(styles)(App);
