import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { grey } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import PageBase from "../components/PageBase";

const AddCategory = () => {
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
        <PageBase title="Add a new category" navigation="Application / Form Page">
            <form>
                <TextField
                    id="standard-full-width"
                    label="Description"
                    style={{ margin: 7 }}
                    placeholder="Enter a brief description of the category"
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
                    placeholder="How would you like to name the category"
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
                    label="Budget"
                    placeholder="How much money do you plan to put in"
                    helperText="Enter a number"
                />
                <Divider />

                <div style={styles.buttons}>
                    <Link to="/table/data">
                        <Button variant="contained">Cancel</Button>
                    </Link>

                    <Link to="/table/data">
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

export default AddCategory;
