import React from "react";
import {render} from "react-dom";
import "./css/index.css";
import Search from "./components/Search"
import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Article from "./components/Article"
import Tabbar from "./components/Tabbar"
let el = (
    <div>
 
        <Search></Search>
        <Nav></Nav>
        <Banner></Banner>
        <Article></Article>
        <Article></Article>
        <Article></Article>
        <Tabbar></Tabbar> 



    </div>
)
render(el, document.getElementById("root"))