webpackJsonp([15],{38:function(e,t,a){var n=React.createClass({displayName:"Example",onClickHandler:function(e){RUI.DialogManager.alert("click:"+e,"提示")},render:function(){return React.createElement("div",{className:"example-button"},React.createElement("h2",{className:"title"},"按钮",React.createElement("span",null,"Button")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement("h4",{className:"final-title"},"主题"),React.createElement("div",null,React.createElement(RUI.Button,{className:"primary"},"主题"),React.createElement(RUI.Button,null,"按钮"),React.createElement(RUI.Button,{onClick:this.onClickHandler},"点击"),React.createElement(RUI.Button,{onClick:this.onClickHandler,disable:!0},"禁用"))),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("textarea",{defaultValue:a(87)})))}});e.exports=n},87:function(e,t){e.exports='var Example = React.createClass({\r\n    onClickHandler:function(e) {\r\n        RUI.DialogManager.alert("click:" + e, "提示");\r\n    },\r\n    render:function() {\r\n        return <div className="example-button">\r\n            <h2 className="title">按钮<span>Button</span></h2>\r\n            <h3 className="sub-title">演示</h3>\r\n            <div className="example">\r\n                <h4 className="final-title">主题</h4>\r\n                <div>\r\n                    <RUI.Button className="primary">主题</RUI.Button>\r\n                    <RUI.Button>按钮</RUI.Button>\r\n                    <RUI.Button onClick={this.onClickHandler}>点击</RUI.Button>\r\n                    <RUI.Button onClick={this.onClickHandler} disable={true}>禁用</RUI.Button>\r\n                </div>\r\n            </div>\r\n            <h3 className="sub-title">源码</h3>\r\n            <div className="source">\r\n                <textarea defaultValue={require(\'raw!./button.js\')} />\r\n            </div>\r\n        </div>;\r\n    }\r\n});\r\n\r\nmodule.exports = Example;'}});