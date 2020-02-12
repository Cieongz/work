import React from "react";
import "../css/Tabbar.css"
function Tabbar(){
    return(
        <div id="tab">
            <div id="ta">
                <ul>
                    <li>
                        <div><img src={require("../img/4.png")}/></div>
                        <span>要闻</span>
                    </li>
                    <li>
                        <div><img src={require("../img/5.png")}/></div>
                        <span>周刊</span>
                    </li>
                    <li>
                        <div><img src={require("../img/6.png")}/></div>
                        <span>特供</span>
                    </li>
                    <li>
                        <div><img src={require("../img/7.png")}/></div>
                        <span>数据通</span>
                    </li>
                    <li>
                        <div><img src={require("../img/8.png")}/></div>
                        <span>我的</span>
                    </li>
                    </ul>
            </div>
        </div>

        )
}




export default Tabbar