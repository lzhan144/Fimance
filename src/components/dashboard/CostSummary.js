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
import RedeemIcon from '@material-ui/icons/Redeem';
import PollIcon from '@material-ui/icons/Poll';
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
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

export default function CostSummary() {
    const classes = useStyles();

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
                    <ListItemText primary="$775" align="right" style={{ color: green[500] }}/>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <RedeemIcon style={{ color: blue[500] }}/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Income" />
                    <ListItemText primary="$700" align="right" style={{ color: blue[500] }}/>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <PollIcon style={{ color: red[500] }}/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Budget" />
                    <ListItemText primary="$500" align="right" style={{ color: red[500] }}/>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <LocalGroceryStoreIcon style={{ color: orange[500] }}/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Bills" />
                    <ListItemText primary="$775" align="right" style={{ color: orange[500] }}/>
                </ListItem>
            </List>
        </Paper>


    );
}