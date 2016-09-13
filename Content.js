var React=require("react");
var ReactDOM=require("react-dom")
var Display=require("./Display.js")

var Content=React.createClass({

     render:function(){
      console.log(this.props.data);
          var result = this.props.data.map(function(search) {
        return (

          <Display arr={search.Search}>

          </Display>
        );
      });
       return(
           <div>
           <h2>Content t</h2>
           {result}
           <Display/>
           </div>

       );
   }

})
module.exports=Content;
