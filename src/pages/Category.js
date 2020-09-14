import React from "react";
import Grid from "@material-ui/core/Grid";
import Data from "../data";
import CategoryPie from "../components/category/categoryPie";
import CategoryBar from "../components/category/categoryChart";
import Paper from "@material-ui/core/Paper";
import GlobalStyles from "../styles.scss";
import blue from "@material-ui/core/colors/blue";
import globalStyles from "../styles";

const styles = {
    paper: {
        minHeight: 200,
        padding: 0
    },
    header: {
        fontSize: 24,
        fontWeight: 300,
        backgroundColor: blue[400],
        color: "white",
        lineHeight: "48px",
        paddingLeft: "10px"
    }
};
const Category = () => {
    return (
        <div>
            <h3 style={globalStyles.navigation}>View / Category</h3>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper style={styles.paper}>
                        <div style={{ ...GlobalStyles.title, ...styles.header }}>
                            Category Ratio
                        </div>
                        <CategoryPie data={Data.dashBoardPage.categoryPie}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper style={styles.paper}>
                        <div style={{ ...GlobalStyles.title, ...styles.header }}>
                            Expense v.s. Budget
                        </div>
                        <CategoryBar data={Data.dashBoardPage.categoryBar}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Category;





