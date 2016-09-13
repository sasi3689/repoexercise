var React=require('react')

var Display=React.createClass({

  render:function(){

    return(
      <div className="content">
       <div className="row" >
            <div className="col-sm-2">
              <div className="thumbnail">
              poster poster poster poster

               </div>
            </div>
            <div className="col-sm-10">
              <div className="list-group">
                <h1 className="list-group-item-heading">{this.props.Title}</h1>

              </div>
           </div>
        </div>
      </div>

    )

    }

})
module.exports=Display;
