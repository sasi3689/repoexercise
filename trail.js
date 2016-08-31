/*var sai=process.argv[2];
console.log(sai);*/
function create(){
  var obj=new Object();
  obj.name="sai";
  obj.age="age";
  obj.toString=function(){

    return obj.name+"baba"+obj.age;
  };
 return obj;
}

//var v=f();
//console.log(v);
var var1=create();
console.log(var1);
/*var obj1=new Object();
obj1.name="sai";
//obj1.toString=f;
function f(){
  return obj1.name+"baba"
}
var v=f();
console.log(v);
/*var obj=new Object();
obj.name="sai";
console.log(obj["name"]);*/
/*var a=new Array("sai","saranvi");
a.push("GURU");
a.unshift("sathguru");
a.pop();
console.log(a);*/
/*var o={
  id:"",
  id:""
};
function init(){
  document.getElementid("id").innerHtml=o.id;
}*/
