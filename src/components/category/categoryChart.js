import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class CategoryChart extends PureComponent {

    render() {
        return (
            <BarChart
                width={500}
                height={300}
                data={this.props.data}
                margin={{
                    top: 20, right: 30, left: 25, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="budget" fill="#8884d8" />
                <Bar yAxisId="right" dataKey="cost" fill="#82ca9d" />
            </BarChart>
        );
    }
}


