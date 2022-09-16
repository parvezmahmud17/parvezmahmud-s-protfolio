// var nurrain = document.getElementsByTagName("header") [0];
// var button = document.getElementsByTagName("button") [0];
//  var input=document.getElementsByTagName("input") [0];
//  var submit= document.getElementById("submit");
// button.addEventListener("click", function(){
//     nurrain.style="background-color:yellow; border-redious:50%;";
// });


// nurrain.addEventListener("mouseover", function() {
//  nurrain.style="background-color:blue; font-size:20px";
    
// });
// document.body.addEventListener("click", function(){
//     nurrain.style="background-color:pink;,text-color:white;, font-size:110px;";
// });
// //  atar picone document lekhar karon hole variable silect sarai para jay
// button.addEventListener("click", function(){
//     nurrain.style="  background: linear-gradient(45deg,rgb(244, 238, 238),rgb(14, 239, 6),rgb(18, 103, 69)); "
// });
// input.addEventListener("keyup", function(e){
//     nurrain.style="font-size:210px;,color:yellow;"
//     alert(e.key)
// });
// submit.addEventListener("click" , function(){
//     document.write(input.value);
// });
// Calculator

// var num1 = prompt("Enter your First Number:");
// var num2 = prompt("Enter your second Number :");
// num1 = parseInt(num1, 10);
// num2 = parseInt(num2, 10);
// var sum ,sub ,mul ,div ,rem;
// sum = num1 + num2;
// document.write( num1  + "+"  + num2 + "=" + sum + "</br>");
// sub = num1 - num2;
// document.write( num1  + "-"  + num2 + "=" + sub + "</br>");
// mul = num1 * num2;
// document.write( num1  + "*"  + num2 + "=" + mul + "</br>");
// div = num1 / num2;
// document.write( num1  + "/"  + num2 + "=" + div + "</br>");
// rem = num1 % num2;

// document.write( num1  + "%"  + num2 + "=" + rem + "</br>");
// var farenhite = parseFloat(prompt("Enter Farenhite "));
// var celsius = ( farenhite -32 ) * ( 5/9);
// document.write("Celsious = " + celsius);


// Task 5
// var ditect = prompt("Enter a Letter");
// var see = ditect.toLowerCase();
// switch(see) {
//     case "a":
//     console.log("Vawel");
//     break;
//     case "e":
//     console.log("Vawel");
//     break;
//     case "i":
//     console.log("Vawel");
//     break;

//     case "o":
//     console.log("Vawel");
//     break;

//     case "u":
//     console.log("Vawel");
//     break;

//     default:
//         console.log("consonant");
// }
// for( var x =1; x<=10; x=x + 1){
//     document.write(" " + x);
// }

// var i = 2;
// while( i<=20){
//     document.write( " " + i)
// i= i+ 1}
// Task-6 
// (function resulte(X,Y) {
//     var sum = X + Y;

   
//     document.write(sum);

// }) (100, 10);



//   (function parvez(x,y) {
//           var sum =x*y;
//           document.write(sum);

//   })(2,3);
// how to creat constraction
// function Parvez ( name,ball,run,wicket){
//     this.ball=ball;
//     this.Run =run;
//     this.wicket=wicket;
//     this.name=name;


//     this.display = function() {
//         console.log(name)
//         console.log(ball);
//         console.log(run);
//         console.log(wicket);

//     }}

// var tamim_Ikbal = new Parvez ("tamim_Ikbal","20 over 3 ball", "78 run", "Zero" );
// var Saqib = new Parvez ("Saqib","25 over 5 ball", "40 run", "2" );
// var Saymu = new Parvez ("Saymu","20 over ", "88 run", "Zero" );
// var sabbir = new Parvez ("sabbir","20 over 3 ball", "38 run", "Zero" );



// tamim_Ikbal.display();
// Saqib.display();
// Saymu.display();
// sabbir.display();
// var parvezMahmud =document.getElementById("kook");
// parvezMahmud.innerHTML="GOOD BYE";
// parvezMahmud.innerHTML="valo theko valobasa" ;
// var information = document.getElementsByTagName ("h1") [0];
// information.innerHTML="He is a junio Devloper";

var allPhotos =["image/1.jpg","image/2.jpg","image/3.jpg","image/4.jpg","image/5.jpg","image/6.jpg"]
var photostag =document.querySelector("img");
var count = 0;
function next(){
    count++
    if(count>=allPhotos.length){
        count=0;
        photostag.src=allPhotos[count];
    }
    else(photostag.src=allPhotos[count]);
}
function prev(){
    count--
    if(count <0){
        count= allPhotos.length -1;
        photostag.src=allPhotos[count];
    }
    else(photostag.src=allPhotos[count]);
}