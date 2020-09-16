import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { grey } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import PageBase from "../components/PageBase";
import { useForm } from 'react-hook-form';
import red from '@material-ui/core/colors/red';
import Typography from '@material-ui/core/Typography';


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
        errorMessage: {
            color: red[600],
        },
    };
    const { register, handleSubmit, errors }= useForm();

    const onSubmit = async (data) => {
        const response = await fetch(
            '/categories',
            {method: 'POST',
            body: JSON.stringify(data),
            headers:{'Content-Type':'application/json'}
            },
        );
        console.log(response.status)
    }

    return (
        <PageBase title="Add a new category" navigation="Application / Form Page">
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    id="standard-full-width"
                    style={{ margin: 7 }}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name = "name"
                    label= "Name"
                    placeholder="How would you like to name the category"
                    helperText="Enter a word or phrase"
                    inputRef = {register({ required: true, maxLength: 20 })}
                />
                <Typography className={styles.errorMessage} variant="body2">
                    {errors.name && 'name is required.'}
                    {errors.name && errors.name.type === 'pattern' && 'Nickname should start with letters and only contain \' A-Z \', \' a-z \', \' 0-9 \' and \' _ \'.'}
                    {errors.name && errors.name.type === 'maxLength' && 'The maximum length is 20.'}
                </Typography>

                <TextField
                    id="standard-full-width"
                    style={{ margin: 7 }}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name ="budget"
                    label="Budget"
                    placeholder="How much money do you plan to put in"
                    helperText="Enter a number"
                    inputRef = {register({ pattern: /\d+/ })}
                />
                <Typography className={styles.errorMessage} variant="body2">
                    {errors.budget && 'Please enter number for budget.'}
                </Typography>

                <Divider />

                <div style={styles.buttons}>
                    <Link to="/table">
                        <Button variant="contained">Return</Button>
                    </Link>
                    <Button
                        style={styles.saveButton}
                        variant="contained"
                        type="submit"
                        color="primary">
                        Submit
                    </Button>
                </div>
            </form>
        </PageBase>
    );
};

export default AddCategory;
