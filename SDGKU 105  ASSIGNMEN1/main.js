

let age=[];
let address;
let signup;
let breed;
let gender;
let contactPhone;
let name;
let ownerName;

class pet{
    constructor(name,breed,age,ownerName,gender,contactPhone){
        this.name=name;
        this.breed=breed;
        this.age=age;
        this.ownerName=ownerName;
        this.gender=gender;
        this.contactPhone=contactPhone;
    }
}


const fluffy=new pet("Fluffy","maltise","14","Pamela","female","619-207-8763");
const sally=new pet("Sally", "poodle", "24", "Tina" ,"female", "719-964-5974");
const tom=new pet("Tom","German Shepard","51","Brad", "male","646-205'5567")
console.log(fluffy);
console.log(sally);
console.log(tom);



class register{
    constructor(name, time, day, service){
        this.name=name;
        this.time=time;
        this.day=day;
        this.service=service;
    }
}

var billy=new register("billy","3:00pm","Monday","Trim");
var spotty=new register("spotty","4:00pm","Wednesday","Trim");
var zazzy=new register("zazzy","3:00pm","Monday","wash & Trim");
console.log(billy);
console.log(spotty);
console.log(zazzy);


price=[100,200,50,75, 80];
wash=200;
trim=100;
style=50;
nails=75;
homecare=80;

for (i=0; i<5;i++){
console.log(price[i]);
}

billy="billy--------------------------------------"+wash;
spotty= "spotty-----------------------------------" +wash + "+"+ trim;
zazzy="zazzy---------------------------------------"+nails + "+"+style + "+"+ trim;



console.log(billy);
console.log(spotty);
console.log(zazzy);


var price=200;
var tax=0.16;
var total= price+tax;

console.log('your total for Billy is: '+total);
console.log("Thanks for stopping by Pazaze's Pet Pampering" )

var price=200;
var price2=100;
var tax=0.16;
var total= price+ price2+tax;

console.log('your total for Spotty is: '+total);
console.log("Thanks for stopping by Pazaze's Pet Pampering" )


var price=100;
var price2=75;
var price3=50;
var tax=0.16;
var total= price+ price2+ price3+tax;

console.log('your total for Zazzy is: '+total);
console.log("Thanks for stopping by Pazaze's Pet Pampering" )


