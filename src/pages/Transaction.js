import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import globalStyles from "../styles";
import Head from "../components/Table/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import PropTypes from "prop-types";

const desc = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
};

const stableSort = (array, cmp) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
};

const getSorting = (order, orderBy) => {
    return order === "desc"
        ? (a, b) => desc(a, b, orderBy)
        : (a, b) => -desc(a, b, orderBy);
};

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3
    },
    table: {
        minWidth: 650
    },
    tableWrapper: {
        overflowX: "auto"
    }
});

const classes = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3
    },
    table: {
        minWidth: 650
    },
    tableWrapper: {
        overflowX: "auto"
    }
});

class Transaction extends React.Component {

    state = {
        order: "asc",
        orderBy: "amount",
        data: [],
        page: 0,
        rowsPerPage: 5,
        click: false
    };

    // get method
    async componentDidMount() {
        fetch('/transactions')
            .then(res => res.json())
            .then((data) => {
                this.setState({data: data})
            })
            // .catch(console.log)
    }

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = "desc";

        if (this.state.orderBy === property && this.state.order === "desc") {
            order = "asc";
        }

        this.setState({order, orderBy});
    };

    handleChangePage = (event, page) => {
        this.setState({page});
    };

    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value});
    };


    render() {
        const {data, order, orderBy, rowsPerPage, page} = this.state;
        const emptyRows =
            rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

        return (
            <div>
                <h3 style={globalStyles.navigation}>View / Transaction</h3>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <Head
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={this.handleRequestSort}
                            rowCount={data.length}
                        />
                        <TableBody>
                            {stableSort(data, getSorting(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map(n => {
                                    return (
                                        <TableRow
                                            hover
                                            tabIndex={-1}
                                            key={n.id}
                                        >
                                            <TableCell align="left">{n.name}</TableCell>
                                            <TableCell align="left">{n.categoryName}</TableCell>
                                            <TableCell align="left">{n.detail}</TableCell>
                                            <TableCell align="left">{n.amount}</TableCell>
                                            <TableCell align="left">{n.transactTime}</TableCell>

                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{height: 49 * emptyRows}}>
                                    <TableCell colSpan={6}/>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        backIconButtonProps={{
                            "aria-label": "Previous Page"
                        }}
                        nextIconButtonProps={{
                            "aria-label": "Next Page"
                        }}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                </TableContainer>
            </div>
        );
    }
}
    Transaction.propTypes = {
    classes: PropTypes.object.isRequired
};

    export default withStyles(styles)(Transaction);