import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import globalStyles from "../styles";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, category, source, amount, date) {
    return { name, category, source, amount, date };
}

const rows = [
    createData('Mortgage', 'Rent', 'Landlord', 2000,"07/02/2020"),
    createData('Electricity', 'Utility', 'State Grid Company', 37, "12/08/2020"),
    createData('Eating at Texas Road House', 'Food', 'Texas Road House', 240, "04/09/2020"),
    createData('City Park Tour', 'Entertainment', 'City Park', 67, "01/05/2020"),
];

export default function Transaction() {
    const classes = useStyles();

    return (
        <div>
            <h3 style={globalStyles.navigation}>View / Transaction</h3>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Transaction</TableCell>
                            <TableCell align="left">Category</TableCell>
                            <TableCell align="left">Source</TableCell>
                            <TableCell align="left">Amount</TableCell>
                            <TableCell align="left">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.category}</TableCell>
                                <TableCell align="left">{row.source}</TableCell>
                                <TableCell align="left">{row.amount}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
