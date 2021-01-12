//var randomnumber = Math.floor(Math.random() * (5 - 0 + 1)) + 0
//function function1() {
  //  console.log(randomnumber)
	//	if (randomnumber = 0) {
	//		console.log('Command run: f/hello with response 0')
	//	}
	//	if (randomnumber = 1) {
	//		console.log('Command run: f/hello with response 1')
	//	}
	//	if (randomnumber = 2) {
	//		console.log('Command run: f/hello with response 2')
	//	}
	//	if (randomnumber = 3) {
	//		console.log('Command run: f/hello with response 3')
	//	}
	//	if (randomnumber = 4) {
	//		console.log('Command run: f/hello with response 4')
	//	}
	//	if (randomnumber = 5) {
	//		console.log('Command run: f/hello with response 5')
    //  }
//}
//function1();
function func1() {
    console.log("1");
 }
 
 function func2() {
    console.log("2");
 }
 
 function func3() {
    console.log("3");
 }
 function random(){
   var i  = Math.floor(Math.random()*20)%4;
   if(i<=0) return random();
   return i;
 }
 function execute(){
   var i = random();
   eval('func'+i+'()');
 }
 execute();
