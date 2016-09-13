var React=require('react');
var ReactDOM=require('react-dom');
var Child=require('./component/Child.js');
var Child2=require("./component/Child2.js");

var MainComponent = React.createClass({

  getInitialState: function(){

    return ({statedata:'State data'})
  },
  handleClick:function(data){
    //e.preventDefault();
    this.setState({statedata:data});
  },

  render:function(){
      return (

      <div>
       <h2>Hello from React</h2>
       <Child sdata={this.state.statedata}  h={this.handleClick} data='hello'/>
       <Child2 s1data={this.state.statedata}/>
       <button type="button" onClick={this.handleClick}>button</button>
      </div>
        )
  }
})
ReactDOM.render(<MainComponent/>,document.getElementById('app'));
//ReactDOM.render(<Child/>,document.getElementById('app2'));
