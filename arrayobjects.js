arrayObjects=[{name:"Saurabh", age: 30, occupation: "Team Leader"},
{name:"Anupriya", age: 32, occupation: "Team Leader"},
{name:"Kalyani", age: 25, occupation: "Programmer"},
{name:"Damodaran", age: 27, occupation: "Programmer"},
{name:"Krishnakath", age: 22, occupation: "Programmer"},
{name:"Venketraman", age: 28, occupation: "Programmer"}];
//manipulation("Programmer");
console.log("list");
list();
console.log("sorted");
sort();
console.log("json");
json();


function list(p){
  var Array1=[];
  for(i=0;i<arrayObjects.length;i++){
    if(arrayObjects[i].occupation=="Programmer"){
      Array1.push(arrayObjects[i]);
    }}
console.log(Array1);
}

function sort()
{
  for(var i=0;i<arrayObjects.length;i++){
    for(var j=i+1;j<arrayObjects.length;j++){
      if(arrayObjects[j].age>arrayObjects[i].age){
        var temp=arrayObjects[j];
        arrayObjects[j]=arrayObjects[i];
        arrayObjects[i]=temp;
            }
    }
  }
console.log(arrayObjects)
}

function json(){
  var Array1=[];
var Array2=[];
for(i=0;i<arrayObjects.length;i++){
  if(arrayObjects[i].occupation=="Team Leader"){
    Array1.push({name:arrayObjects[i].name,age:arrayObjects[i].age});
      }
      if(arrayObjects[i].occupation=="Programmer"){
        Array2.push({name:arrayObjects[i].name,age:arrayObjects[i].age});
      }
    }
var json={"Team Leader":Array1,"Programmer":Array2};
console.log(json);
}
