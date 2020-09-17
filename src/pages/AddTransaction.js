import React from 'react';
import { useForm } from 'react-hook-form';
import { RHFInput } from 'react-hook-form-input';
import Select from 'react-select';
import TextField from "@material-ui/core/TextField";
import {grey} from "@material-ui/core/colors";
import Link from "@material-ui/core/Link";
import InputLabel from "@material-ui/core/InputLabel";
import PageBase from "../components/PageBase";
import Button from "@material-ui/core/Button";

export default function AddTransaction() {
    const { handleSubmit, register, setValue } = useForm();
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
    const [category, setCategory] = React.useState([]);
    const [options, setOptions] = React.useState([]);

    React.useEffect(()=> {
            let unmounted=false;
            const fetchCategory = async() => {
                const resp = await fetch('/categories');
                const category = await resp.json();
                if (!unmounted) {
                    setCategory(category);
                    if(options.length < category.length){
                        category.map((cate)=>{
                            options.push({value:cate.id,label:cate.name})
                        })}
                    // console.log( options );
                }
            };
            // console.log( category );
            fetchCategory();
            return () => {unmounted = true;}
        },
    );

    const onSubmit = async (data) => {
        console.log(data)
        const response = await fetch(
            '/transactions',
            {method: 'POST',
                body: JSON.stringify(data),
                headers:{'Content-Type':'application/json'}
            },
        );
        if (response.status === 200){
            alert('You have successfully added a transaction! You can click return button to return Now.');
        }
        else{
            alert('There is a connection problem here, please resubmit the form.')
        }
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
                    name="detail"
                    inputRef = {register({ required: false, maxLength: 20 })}
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
                    name="amount"
                    inputRef = {register({ pattern: /\d+/ })}
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
                    name="transactTime"
                    inputRef = {register({ required: true })}
                />

                <InputLabel htmlFor="Category">Category</InputLabel>
                <RHFInput
                    as={<Select
                        options={options} />}
                    rules={{ required: true }}
                    name="category"
                    register={register}
                    setValue={setValue}
                />
                <div style={styles.buttons}>
                    <Link to="/dashboard">
                        <Button variant="contained">Return</Button>
                    </Link>
                    <Button style={styles.saveButton}
                            variant="contained"
                            type="submit"
                            color="primary"
                    >submit</Button>
                </div>

            </form>
        </PageBase>
    );
}