import React ,{Component} from "react";
import "../css/Article.css";
import axios from 'axios';
class Article extends Component{
    state={
        articles:[],
    }
    componentDidMount(){
        axios.get('http://playground.it266.com/news')
        .then((response)=>{
            this.setState({articles:response.data.articles})
        })
        .catch((error)=>{
            alert("出错啦")
        });
    }


    render(){
        return(
            /*<div id="art">*/
            
                this.state.articles.map((item)=>{
                    return(
                        <div id="ar" key={item.id}>
                        <div id="zi" >{item.title}</div>
                        <div id="tu"><img src={require("../img/3.jpg")}/></div>
                        </div>
                    )
                })
            
            /*</div>*/
        )
    }
}
export default Article