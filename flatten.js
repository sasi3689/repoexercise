var Array1=[5,[22],[[14]],[[5]],[6,7]];
var newArray1=[];
for(var i=0;i<Array1.length;i++){
  if(Array1[i] instanceof Array)
  {
  for(var j=0;j<Array1[i].length;j++){
    if(Array1[i][j] instanceof Array)
    {
    for(var k=0;k<Array1[i][j].length;k++){
      newArray1.push(Array1[i][j][k]);

    }
  }  else{
    newArray1.push(Array1[i][j]);
}
  }
}else{
  newArray1.push(Array1[i]);
}
}
console.log(newArray1);
//var o= {"[0]":1,"[1].[0]":2,"[1].[1].[0]":3,"[1].[1].[1]":4,"[1].[2]":5,"[2]":6}
/*Array1.prototype.flatten = function() {
    var ret = [];
    for(var i = 0; i < this.length; i++) {
        if(Array1.isArray1(this[i])) {
            ret = ret.concat(this[i].flatten());
        } else {
            ret.push(this[i]);
        }
    }
    return ret;
};
console.log(a.flatten());*/
