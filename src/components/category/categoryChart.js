import React, { PureComponent } from 'react';
import {RadialBarChart, RadialBar, Legend} from 'recharts';


const style = {
    top: 100,
    left: 400,
    lineHeight: '24px',
};


export default class CategoryBar extends PureComponent {

    render() {
        return (
            <RadialBarChart
                width={500} height={300} cx={220} cy={150}
                innerRadius={20} outerRadius={140} barSize={10}
                data={this.props.data}>
                <RadialBar
                    minAngle={15} label={{ position: 'insideStart', fill: 'white' }}
                    background clockWise dataKey="uv" legendType="circle"/>
                <Legend
                    iconSize={10} width={150} height={150}
                    layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </RadialBarChart>
        );
    }
}

