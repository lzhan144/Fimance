import React, { PureComponent } from 'react';
import {PieChart, Pie, Sector, ResponsiveContainer} from 'recharts';
import Paper from "@material-ui/core/Paper";
import GlobalStyles from "../../styles.scss";
import {orange} from "@material-ui/core/colors";
//
// const data = [
//     { name: 'Expense', value: 400 },
//     { name: 'Available', value: 100 },
// ];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload, percent, value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

const styles = {
    paper: {
        minHeight: 344,
        padding: 0
    },
    legend: {
        paddingTop: 20
    },
    pieChartDiv: {
        height: 290,
        textAlign: "center"
    },
    header: {
        fontSize: 24,
        fontWeight: 300,
        backgroundColor: orange[600],
        color: "white",
        lineHeight: "48px",
        paddingLeft: "10px"
    }
};
export default class Example extends React.Component {

    state = {
            activeIndex: 0,
    }

    componentDidMount() {
        // this.setState({data:[
        //         { name: 'Expense', value: this.props.cost },
        //         { name: 'Available', value: this.props.available },
        //     ]})
        console.log(this.props.data)
    }

    onPieEnter = (data, index) => {
        this.setState({
            activeIndex: index,
        });
    };

    render() {
        return (
            <Paper style={styles.paper}>
                <div style={{ ...GlobalStyles.title, ...styles.header }}>
                    Expense Ratio
                </div>
                <div style={styles.pieChartDiv}>
                    <ResponsiveContainer>
                        <PieChart width={300} height={300} cx={150} cy={150}>
                            <Pie
                                activeIndex={this.state.activeIndex}
                                activeShape={renderActiveShape}
                                data={this.props.data}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                onMouseEnter={this.onPieEnter}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </Paper>
        );
    }
}
