//var randomnumber = Math.floor(Math.random() * (5 - 0 + 1)) + 0
//function function1() {
  //  message.channel.send(randomnumber)
	//	if (randomnumber = 0) {
	//		message.channel.send('Command run: f/hello with response 0')
	//	}
	//	if (randomnumber = 1) {
	//		message.channel.send('Command run: f/hello with response 1')
	//	}
	//	if (randomnumber = 2) {
	//		message.channel.send('Command run: f/hello with response 2')
	//	}
	//	if (randomnumber = 3) {
	//		message.channel.send('Command run: f/hello with response 3')
	//	}
	//	if (randomnumber = 4) {
	//		message.channel.send('Command run: f/hello with response 4')
	//	}
	//	if (randomnumber = 5) {
	//		message.channel.send('Command run: f/hello with response 5')
    //  }
//}
//function1();
function hellorep1() {
    message.channel.send("1");
    console.log('Command run: f/hello with response 1')
 }
 
 function hellorep2() {
    message.channel.send("2");
    console.log('Command run: f/hello with response 2')
 }
 
 function hellorep3() {
    message.channel.send("3");
    console.log('Command run: f/hello with response 3')
 }
 function random(){
   var i  = Math.floor(Math.random()*20)%4;
   if(i<=0) return random();
   return i;
 }
 function execute1(){
   var i = random();
   eval('func'+i+'()');
 }
 execute1();
