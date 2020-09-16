import React, { useState } from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import AddIcon from "@material-ui/icons/Add";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

const toolbarStyles = theme => ({
    root: {
        paddingRight: theme.spacing.unit
    },
    highlight:
        theme.palette.type === "light"
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85)
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark
            },
    spacer: {
        flex: "1 1 100%"
    },
    actions: {
        color: theme.palette.text.secondary
    },
    title: {
        flex: "0 0 auto"
    }
});


function EnhancedTableToolbar (props) {

    const { numSelected, selected, classes } = props;
    const [deleted, setDelete] = React.useState(0);

    const handleButton = (event, selected) => {
        selected.map((select) => {
            deleteRequest(select);
            setDelete(deleted+1);
            console.log("delete "+select);
        });
        alert("You have delete all the categories! Please refresh the page MANUALLY.");
    }

    const deleteRequest = async (id) => {
        const resp = await fetch(
            '/categories/'+id,
            {method: 'DELETE',});
        console.log("rep: " + resp.status);
        if(resp.status !== 200){
            alert("There is a connection problem, please try again.")
        }
    }

    return (
        <Toolbar
            className={classNames(classes.root, {
                [classes.highlight]: numSelected > 0
            })}
        >
            <div className={classes.title}>
                {numSelected > 0 ? (
                    <Typography color="inherit" variant="subtitle1">
                        {numSelected} selected
                    </Typography>
                ) : (
                    <Typography variant="h6" id="tableTitle">
                        Category
                    </Typography>
                )}
            </div>
            <div className={classes.spacer} />
            <div className={classes.actions}>
                {numSelected > 0 ? (
                    <Tooltip title="Delete">
                        <IconButton
                            onClick={event => handleButton(event, selected)}
                            aria-label="Delete" >
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title="Add a category">
                        <Link className="button" to="/Addcategory">
                            <Button align='justify' mini={true} variant="fab" zDepth={0}>
                                <AddIcon />
                            </Button>
                        </Link>
                    </Tooltip>
                )}

            </div>
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired
};

export default withStyles(toolbarStyles)(EnhancedTableToolbar);