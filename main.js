var React=require("react");
var ReactDom=require("react-dom");
var Search=require("./component/Search.js");
var Content=require("./component/Content.js");


var MainComponent=React.createClass({
  getInitialState: function(){

    return ({searchdata:' ',data:[]})
  },
  handleClick:function(data){
    //e.preventDefault();
    console.log("url:"+data);
    this.setState({searchdata:data});
  },


  componentDidMount(){

          this.getDataFromServer(this.state.searchdata);

      },
      //showResult Method
          showResult: function(response) {

              this.setState({
                  data: response
              });
              console.log(data);

      },
      //making ajax call to get data from server
      getDataFromServer:function(URL){
          $.ajax({
              type:"GET",
              dataType:"json",
              url:URL,
              success: function(response) {
                  this.showResult(response);
              }.bind(this),
              error: function(xhr, status, err) {
                  console.error(this.props.url, status, err.toString());
              }.bind(this)
          });
      },



  render:function(){
    return(
      <div>

	<div className="container" id="main">
		<div className="navbar navbar-fixed-top">
			<a className="navbar-brand" href="/" id="image">MovieBox</a>
				<div className="nav-collapse collapse navbar-responsive-collapse">
					<ul className="nav navbar-nav">
						<li className="active">
							<a href="#">Home</a>
						</li>
						<li className="dropdown">
							<a href="#">MovieBox For Mac </a>

              </li>
           <li>
							<a href="#" >MovieBox For Android</a>
        </li>
         <li>
							<a href="#" className="dropdown-toggle"data-toggle="dropdown">More</a>
							<ul className="dropdown-menu">
								<li>
									<a href="#">about</a>
								</li>
								<li>
									<a href="#">news</a>
								</li>
								<li>
									<a href="#">Android</a>
								</li>
								<li>
									<a href="#">contacts</a>
								</li>
							</ul>
						</li>
				</ul>
     </div>
   </div>
</div>
<div className="reactdiv">
      <div className="jumbotron">
        <div className="container">
         <Search s1data={this.state.searchdata} h={this.handleClick}/>
         </div>
         </div>
         <div className='container'>
         <Content data={this.state.data}/>
         </div>
      </div>
      </div>
        )
  }
})
ReactDom.render(<MainComponent />,document.getElementById("app"));
