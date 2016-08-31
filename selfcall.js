(function(){
  console.log("start");
  setTimeout(function cb(){
    console.log("message from callback1");},2);
    console.log("message");
    setTimeout(function cb1(){
      console.log("callback2");},1);
        console.log("end");
    })();
