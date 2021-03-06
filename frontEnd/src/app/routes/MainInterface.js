//引入三个组件  
import Map from "../component/Map.js";   
import Sidebar from "../component/Sidebar.js";
import Panel from "../component/Panel.js";
import MyMenu from "../MyMenu.js";


//引入jQuery  (换到了html中引入)
//let $ = require("jquery");
//window.$ = $;
//window.jQuery = $;

//引入自定义样式
require("../../css/map.new.css");

//引入layer.js
//require("./app/layer/skin/default/layer.css");
//let layer = require("./app/layer/layer.js");
//window.layer = layer;

//引入React
let React = require("react");
window.MyMenu = MyMenu;               //为什么要window.MyMenu?

class MainInterface extends React.Component{
    constructor(props){
        super(props);       
        alert(this.props.location.state.visitID);
        this.state = {
            node: [],
            link: []
        };
    }
    render(){
        return (
            <div id="container">
                <Sidebar updateState={this.updateState.bind(this)} node={this.state.node} link={this.state.link}/>
                <Map updateState={this.updateState.bind(this)} node={this.state.node} link={this.state.link}/>
                <Panel updateState={this.updateState.bind(this)} node={this.state.node} link={this.state.link}/>
            </div>
        );
    }
    /**
     * 更新node和link的回调函数
     * @param {*} node 
     * @param {*} link 
     */
    updateState(node, link){
        let oldNode = this.state.node;
        let oldLink = this.state.link;
        this.setState({
            node: node || oldNode,  //当结果为真时，返回第一个为真的值
            link: link || oldLink
        });
    }
}

export default MainInterface;
