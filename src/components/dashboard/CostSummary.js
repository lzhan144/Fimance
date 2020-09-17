import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Paper from "@material-ui/core/Paper";
import ListSubheader from "@material-ui/core/ListSubheader";
import {cyan} from "@material-ui/core/colors";
import PollIcon from '@material-ui/icons/Poll';
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import Divider from "@material-ui/core/Divider";
import orange from "@material-ui/core/colors/orange";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 300,
        backgroundColor: theme.palette.background.default,
    },
    subheader: {
        fontSize: 24,
        fontWeight: 300,
        backgroundColor: cyan[600],
        color: "white"
    }
}));

export default function CostSummary(props) {
    const classes = useStyles();

    // const [cost, setCost] = React.useState(0);
    // const [budget, setBudget] = React.useState(0);
    // const [bill, setBill] = React.useState(0);
    //
    // React.useEffect(() => {
    //     const fetchBudget = async() => {
    //         const resp = await fetch('/categories/total');
    //         const data = await resp.json();
    //         setBudget(data);
    //     };
    //     const fetchCost = async() => {
    //         const resp = await fetch('/transactions/expenses');
    //         const data = await resp.json();
    //         setCost(data);
    //     };
    //     const fetchBill = async() => {
    //         const resp = await fetch('/transactions/bills');
    //         const data = await resp.json();
    //         setBill(data);
    //     };
    //     fetchBudget();
    //     fetchCost();
    //     fetchBill();
    // },)



    return (
        <Paper>
            <List
                subheader={
                    <ListSubheader classes={{ root: classes.subheader }}>Summary</ListSubheader>
                }
            >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <LocalGroceryStoreIcon style={{ color: green[500] }}/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Expenses" />
                    <ListItemText primary={props.cost} align="right" style={{ color: green[500] }}/>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <PollIcon style={{ color: red[500] }}/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Budget" />
                    <ListItemText primary={props.budget} align="right" style={{ color: red[500] }}/>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <LocalGroceryStoreIcon style={{ color: orange[500] }}/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Bills" />
                    <ListItemText primary={props.bill} align="right" style={{ color: orange[500] }}/>
                </ListItem>
            </List>
        </Paper>


    );
}