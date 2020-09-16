import React from 'react';
import { useForm } from 'react-hook-form';

function NameForm() {
    const { register, handleSubmit, errors } = useForm(); // initialise the hook

    const onSubmit = async (data) => {
        console.log(data)
        console.log(JSON.stringify(data))
        const response = await fetch(
            '/category/addCategory',
            {method: 'POST',
                body: JSON.stringify(data),
                headers:{'Content-Type':'application/json'}
            },
        );


        console.log(response.status)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" ref={register({ required: true })} />{/* register an input */}
            {errors.name && 'Last name is required.'}
            <input name="budget" ref={register({ pattern: /\d+/ })} />
            {errors.budget && 'Please enter number for age.'}
            <input type="submit" />
        </form>
    );
}
export default NameForm;