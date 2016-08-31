function generatePyramid() {
    var n = 10;

    var output="";
    var i;
    var j;
    for (i = 1; i <= n; i++) {
      for (j = n-1; j >=i ; j--) {
          output+=" ";
        }
        for(var k=1;k <= i;k++){
      output+=" *";
        }

  console.log(output);
      output="";
   }

}
generatePyramid();
