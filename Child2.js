  var React=require("react");

  var Child2 =React.createClass({
     render:function(){
      return(
       <div>
          {this.props.s1data}
        <h2>I am from second Child</h2>
       </div>
        )
       }
    })
  module.exports=Child2;
