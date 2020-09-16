import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { grey } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import PageBase from "../components/PageBase";
import red from '@material-ui/core/colors/red';
import Typography from '@material-ui/core/Typography';
import {useForm} from "react-hook-form";

export default function CategoryForm(props) {

    const category = props.data;
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
    console.log("id: "+ category.id+" name: "+category.name+" budget: "+category.budget)


    const { register, handleSubmit, errors }= useForm();

    const onSubmit = async (data) => {
        const response = await fetch(
            '/categories/'+category.id,
            {method: 'PUT',
                body: JSON.stringify(data),
                headers:{'Content-Type':'application/json'}
            },
        );
        console.log(response.status)
        if (response.status === 200){
            alert('You have successfully modified the category! You can click return button to return Now.');
        }
        else{
            alert('There is a connection problem here, please resubmit the form.')
        }
    }

    return (
        <PageBase title="Modify category" navigation="Application / Form Page">
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
                    defaultValue= {category.name}
                    helperText="Modify the name"
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
                    label="Budget"
                    defaultValue={category.budget}
                    name ="budget"
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
