/*var sai="sathguru";
var guruji="myguru";
onsole.log(sai+guruji);*/
var n=5;

function fib(n){
    var a = 0;
    var b = 1;
    var f = 1;
    for(i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
          console.log(f);
    }

};
 fib(n);
