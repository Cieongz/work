import React from "react";
import {render} from "react-dom";
import "./css/index.css";
import Search from "./components/Search"
import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Article from "./components/Article"
import Tabbar from "./components/Tabbar"
import Clock from "./components/Clock"
let articles=[
    {"id":1,"title":"文章1"},
    {"id":2,"title":"文章2"},
    {"id":3,"title":"文章3"},

]
let el = (
    <div>
 
        <Search></Search>
        <Nav></Nav>
        <Banner></Banner>
        <Article></Article>
        <Tabbar></Tabbar> 



    </div>
)
render(el, document.getElementById("root"))