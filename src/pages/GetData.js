import React from 'react';
import CategoryForm from "./CategoryForm";

export default class UserPage extends React.Component {

    // componentWillMount(){
    //     //console.log(this.props.location)//传递过来的所有参数
    //     console.log(this.props.location.state.data)//val值
    // }

    render() {
        return (
            <CategoryForm data={this.props.location.state.data}/>
        )
    }
}