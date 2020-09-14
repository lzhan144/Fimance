import React from "react";
import Assessment from "@material-ui/icons/Assessment";
import GridOn from "@material-ui/icons/GridOn";
import Web from "@material-ui/icons/Web";
import BorderClear from "@material-ui/icons/BorderClear";
import BorderOuter from "@material-ui/icons/BorderOuter";

const data = {
  menus: [
    { text: "DashBoard", icon: <Assessment />, link: "/dashboard" },
    {
      text: "Category",
      icon: <GridOn />,
      link: "/category",
      subMenus: [
        {
          text: "View",
          icon: <BorderClear />,
          link: "/category"
        },
        {
          text: "Management",
          icon: <BorderOuter />,
          link: "/table"
        }
      ]
    },
    { text: "Transaction", icon: <Web />, link: "/transaction" },
  ],

  category:[
    {
      id: 1,
      name:"Utility",
      budget: 2500
    },
    {
      id: 2,
      name:"Food",
      budget: 2500
    },
    {
      id: 3,
      name:"Entertainment",
      budget: 1000
    },
    {
      id: 4,
      name:"Education",
      budget: 1000
    },
    {
      id: 5,
      name:"Fitness",
      budget: 500
    },
    {
      id: 6,
      name:"Beauty",
      budget: 500
    }
  ],

  costSummary:[
    {
      id: 1,
      title: "Expense",
      amount: 4600,
    },
    {
      id: 2,
      title: "Income",
      amount: 7000,
    },
    {
      id: 3,
      title: "budget",
      amount: 5000,
    },
  ],

  dashBoardPage: {
    categoryPie : [
      { name: 'Utility', value: 400 },
      { name: 'Food', value: 300 },
      { name: 'Entertainment', value: 300 },
      { name: 'Education', value: 200 }
    ],
    categoryBar:[
      { name: 'Utility', uv: 400, pv: 800, fill: '#8884d8',},
      { name: 'Food', uv: 300, pv: 567, fill: '#83a6ed',},
      { name: 'Entertainment', uv: 300, pv: 500, fill: '#8dd1e1',},
      { name: 'Education', uv: 200, pv: 1000, fill: '#82ca9d',},
    ]
  }
};

export default data;
