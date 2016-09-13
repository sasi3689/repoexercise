var React=require('react');
//var ReactDOM=require('react-dom');

var GrandChild=React.createClass({
  render:function(){
    return(
    <div>

    <h3>{this.props.d2}</h3>
    <h3>{this.props.d3}</h3>
    </div>
  )
}
})

module.exports=GrandChild;
