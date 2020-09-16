import React from "react";
import { Link } from "react-router-dom";
import { purple, orange } from "@material-ui/core/colors";
import Assessment from "@material-ui/icons/Assessment";
import InfoBox from "../components/dashboard/InfoBox";
import globalStyles from "../styles";
import Grid from "@material-ui/core/Grid";
import CostSummary from "../components/dashboard/CostSummary";
import Progress from "../components/dashboard/Progress";
import {Apps, Description} from "@material-ui/icons";
import blue from "@material-ui/core/colors/blue";

const DashboardPage = () => {

  const [cost, setCost] = React.useState(0);
  const [budget, setBudget] = React.useState(0);
  const [bill, setBill] = React.useState(0);
  const [display, setDisplay] = React.useState([]);
  const [budgetDone, setBudgetdone] = React.useState(false);
  const [costDone, setCostdone] = React.useState(false);

  React.useEffect(() => {
    const fetchBudget = async() => {
      const resp = await fetch('/categories/total');
      const data = await resp.json();
      setBudget(data);
      if (!budgetDone) {
        display.push({ name: 'Available', value: budget-cost })
        setBudgetdone(true)
      }};
    const fetchCost = async() => {
      const resp = await fetch('/transactions/expenses');
      const data = await resp.json();
      setCost(data);
      if (!costDone) {
        display.push({ name: 'Expense', value: cost })
        setCostdone(true)
      }
    };
    const fetchBill = async() => {
      const resp = await fetch('/transactions/bills');
      const data = await resp.json();
      setBill(data);
    };
    fetchCost();
    fetchBudget();
    fetchBill();
  },)



  return (
      <div>
        <h3 style={globalStyles.navigation}>Application / Dashboard</h3>

        <Grid container spacing={3}>

          <Grid container spacing={3} direction="row" >
            <Grid item xs={18} sm={6} md={4}>
              <Link to="/Addtransaction" className="button">
                <InfoBox Icon={Assessment} color={purple[600]} title="Add Transaction" value="4" />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/table" className="button">
                <InfoBox Icon={Apps} color={blue[600]} title="Manage Category" value="6" />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/Financialreport" className="button">
                <InfoBox Icon={Description} color={orange[600]} title="Get Financial Report" value="" />
              </Link>
            </Grid>

          </Grid>

          <Grid item xs={12} sm={6}>
            <CostSummary cost={cost} bill={bill} budget={budget}/>
          </Grid>

          <Grid item xs={6} sm={6}>
            <Progress data={display}/>
          </Grid>
        </Grid>
      </div>
  );
};

export default DashboardPage;
