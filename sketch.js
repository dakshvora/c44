var database;

var md;
var mt;
var form,sub;

function preload(){

  
}


function setup(){
createCanvas(800,800);
database = firebase.database();
    
//form = new Form();
sub = new Subject();
sub.getMaths();

}


function draw(){
//form.display();
console.log(mt)
}