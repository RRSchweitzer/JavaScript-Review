var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function. 
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

var getCalling = callFriend();
getCalling("435-215-9248");


/*

Write a function that accepts a function as it's only argument and returns a new function (which calls the original function that was passed in) that can only ever be executed once.

Once completed, add a second arguments that allows the function to be executed N number of times. After the function has been called N number of times, console.log('STAHHP');

*/



var outer = function(func2) {
	counter = 0;
	return function() {
		if (counter > 0) {
			return func2();
			counter++;
		}
	}
}
var passIn = function() {
	console.log("I\'m  a function");
}

var inner = outer(passIn);





var outer = function(func2, nTimes) {
	counter = 1;
	return function() {
		if (counter <= nTimes) {
			func2();
			counter++;
		}
		else {
			return console.log('STAHHP');
		}
	}
}
var passIn = function() {
	console.log("I\'m  a function");
}

var inner = outer(passIn, 2);



inner();
inner();
inner();
inner();



















