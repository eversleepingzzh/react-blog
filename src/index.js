import React from "react";
import ReactDom from "react-dom";

import './css/index.css'

import AppRouter from './js/router/index.js';

ReactDom.render(
    <AppRouter />,
    document.getElementById("root")
);
