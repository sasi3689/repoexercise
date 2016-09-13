var React=require("react");


var Search=React.createClass({
  getInitialState: function(){

    return ({moviename:''})
  },
  handlemovieChange: function(e){
    e.preventDefault();
    //console.log('Movie searched: '+e.target.value);
    this.setState({moviename: e.target.value});

  },
  handleClick1:function(e){
    e.preventDefault();
    var m=this.state.moviename;
    var u='http://www.omdbapi.com/?s='+m;
    console.log(u);
    this.props.h(u);
  },

  render:function(){
    return(
      <div>
      <input
          type="text"
          placeholder="search for movie"
          value={this.state.moviename}
          onChange={this.handlemovieChange}/>

			<button type="submit" className="btn btn-default" onClick={this.handleClick1}>submit</button>


         </div>
        )
  }
})
module.exports=Search;
