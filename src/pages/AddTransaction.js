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
import {useForm} from "react-hook-form";
import Typography from "@material-ui/core/Typography";

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
    const { register, handleSubmit, errors }= useForm();
    const [category, setCategory] = React.useState([]);
    const [select, setSelect] = React.useState([]);

    React.useEffect(()=> {
        let unmounted=false;
        const fetchCategory = async() => {
            const resp = await fetch('/categories');
            const category = await resp.json();
            if (!unmounted) {
                setCategory(category);
            }
        };
        console.log(category);
        fetchCategory();
        return () => {unmounted = true;}
    },
    );

    const handleSelect = (event) => {
        console.log("selected: " + event.target.value)
        setSelect(event.target.value);
    }

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
        <PageBase title="Add a new transaction" navigation="Application / Form Page">
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    id="standard-full-width"
                    label="Name"
                    style={{ margin: 7 }}
                    placeholder="Enter the name of the transaction"
                    helperText="No longer than 20 characters"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name = "name"
                    inputRef = {register({ required: true, maxLength: 20 })}
                />
                <Typography className={styles.errorMessage} variant="body2">
                    {errors.name && 'name is required.'}
                    {errors.name && errors.name.type === 'pattern' && 'Name should start with letters and only contain \' A-Z \', \' a-z \', \' 0-9 \' and \' _ \'.'}
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
                    label="Source"
                    placeholder="Describe the source of the transaction"
                    helperText="Optional"
                    name="source"
                    inputRef = {register({ required: false, maxLength: 20 })}
                />
                <Typography className={styles.errorMessage} variant="body2">
                    {errors.source && errors.source.type === 'pattern' && 'Source should start with letters and only contain \' A-Z \', \' a-z \', \' 0-9 \' and \' _ \'.'}
                    {errors.source && errors.source.type === 'maxLength' && 'The maximum length is 20.'}
                </Typography>

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
                    name="amount"
                    inputRef = {register({ pattern: /\d+/ })}
                />
                <Typography className={styles.errorMessage} variant="body2">
                    {errors.amount && 'Please enter number for amount.'}
                </Typography>

                <TextField
                    id="Date"
                    label="Transaction Date"
                    type="date"
                    InputLabelProps={{
                        shrink: true
                    }}
                    margin="normal"
                    fullWidth={true}
                    name="date"
                    inputRef = {register({ required: true })}
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
                        value={select}
                        onChange={handleSelect}
                    >
                        {category.map((cate) => {
                                return(
                                <MenuItem value={cate.id}>{cate.name}</MenuItem>
                                )
                            })
                        }
                    </Select>
                </FormControl>

                <Divider />

                <div style={styles.buttons}>
                    <Link to="/">
                        <Button variant="contained">Return</Button>
                    </Link>

                    <Button
                        style={styles.saveButton}
                        variant="contained"
                        type="submit"
                        color="primary"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </PageBase>
    );
};

export default AddTransaction;