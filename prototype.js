// prototype is way to add new methods in our class or attributes in our function

var stud = function(){
    this.name = "Rajkumar";
    this.age = 21;
    this.email = "rajubhai@gmail.com"
}


var ss = new stud();
stud.prototype = {
    address : "Rajstahn",
}



console.log(ss.address);