var React=require('react');
var ReactDOM=require('react-dom');
var GrandChild=require('./GrandChild.js')

var Child=React.createClass({
  updateClick:function(e){
    e.preventDefault();
    this.props.h("new state");
  },
  render:function(){
    return(
    <div>
     {this.props.sdata}
     <button type="button" onClick={this.updateClick}>button</button>

    <GrandChild d2={this.props.data} d3="My GrandChild data"/>
    </div>
  )
}
})

module.exports=Child;
