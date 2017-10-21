var a = prompt('Base value a: ');
if (a <= 0) {
	alert('Wartość musi być dodatnia');
	a = prompt('Base value a: ');
}

var h = prompt('Height value h: ');
if (h <= 0) {
	alert('Wartość musi byc dodatnia');
	h = prompt('Height value h: ');
}
//calculate
var triangleArea = a * h / 2;
//statements
alert('Triangle field with base a: ' + a + ' and height h: ' + h + ' is egual to: ' + triangleArea);
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);