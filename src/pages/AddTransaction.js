import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { grey } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import PageBase from "../components/PageBase";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const AddTransaction = () => {
    const styles = {
        toggleDiv: {
            marginTop: 20,
            marginBottom: 5
        },
        toggleLabel: {
            color: grey[400],
            fontWeight: 100
        },
        buttons: {
            marginTop: 30,
            float: "right"
        },
        saveButton: {
            marginLeft: 5
        },
        textField: {
            marginLeft: 2,
            marginRight: 2,
            width: '50ch',
        },
    };

    return (
        <PageBase title="Add a new transaction" navigation="Application / Form Page">
            <form>
                <TextField
                    id="standard-full-width"
                    label="Source"
                    style={{ margin: 7 }}
                    placeholder="Enter the source of the transaction"
                    helperText="No longer than 50 characters"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="standard-full-width"
                    style={{ margin: 7 }}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    label="Name"
                    placeholder="How would you like to name the transaction"
                    helperText="Enter a word or phrase"
                />

                <TextField
                    id="standard-full-width"
                    style={{ margin: 7 }}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    label="Amount"
                    placeholder="Amount"
                    helperText="Enter a number"
                />

                <TextField
                    id="Date"
                    label="Transaction Date"
                    type="date"
                    InputLabelProps={{
                        shrink: true
                    }}
                    margin="normal"
                    fullWidth={true}
                />

                <FormControl fullWidth={true}>
                    <InputLabel htmlFor="Category">Category</InputLabel>
                    <Select
                        inputProps={{
                            name: "Category",
                            id: "Category"
                        }}
                        fullWidth={true}
                        margin="normal"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Utility"}>Utility</MenuItem>
                        <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
                        <MenuItem value={"Food"}>Food</MenuItem>
                    </Select>
                </FormControl>

                <Divider />

                <div style={styles.buttons}>
                    <Link to="/">
                        <Button variant="contained">Cancel</Button>
                    </Link>

                    <Link to="/">
                        <Button
                            style={styles.saveButton}
                            variant="contained"
                            type="submit"
                            color="primary"
                        >
                            Submit
                        </Button>
                    </Link>
                </div>
            </form>
        </PageBase>
    );
};

export default AddTransaction;