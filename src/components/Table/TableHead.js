import React from "react";
import PropTypes from "prop-types";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Tooltip from "@material-ui/core/Tooltip";

const rows = [

    { id: "name", numeric: false, disablePadding: false, label: "Name" },
    { id: "categoryName", numeric: false, disablePadding: false, label: "Category" },
    { id: "detail", numeric: false, disablePadding: false, label: "Source" },
    { id: "amount", numeric: true, disablePadding: false, label: "Amount"},
    { id: "transactTime", numeric: false, disablePadding: false, label: "Date" },
];

class Head extends React.Component {
    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
    };

    render() {
        const {
            order,
            orderBy
        } = this.props;

        return (
            <TableHead>
                <TableRow>
                    {rows.map(
                        row => (
                            <TableCell
                                key={row.id}
                                // align={row.numeric ? "right" : "left"}
                                // padding={row.disablePadding ? "none" : "default"}
                                sortDirection={orderBy === row.id ? order : false}
                            >
                                <Tooltip
                                    title="Sort"
                                    placement={row.numeric ? "bottom-end" : "bottom-start"}
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={orderBy === row.id}
                                        direction={order}
                                        onClick={this.createSortHandler(row.id)}
                                    >
                                        {row.label}
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                        ),
                        this
                    )}
                </TableRow>
            </TableHead>
        );
    }
}

Head.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
};

export default Head;