
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
let pyt="# Online Python compiler (interpreter) to run Python online\n\
# Write Python 3 code in this online editor and run it\n\
print(\"Hello world\")";

/*function god(){
  document.getElementById("code").innerHTML = "hello";
}*/
let a="hello.txt";
let lang="C";
let k=0;
let i=0;
let b="this is my text";
let c="// Online C compiler to run C program online\n\
#include <stdio.h>\n\
\n\
void main() {\n\
    // Write C code here\n\
    printf(\"Hello world\");\n\
}";

var goti;
var editor,xd,xd1;
//Default function to setup editor 
window.onload = function() {
editor = ace.edit(document.getElementById("codeBox"));
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/c_cpp");
};

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function Dark_mode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
 /*if(document.getElementById("code").style.backgroundColor="black"){
    document.getElementById("code").style.backgroundColor="beige";
  }
  else{
    document.getElementById("code").style.backgroundColor="black"
  }*/

  var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);

if (i%2==0){
  document.getElementById("code").style.backgroundColor="black";
  document.getElementById("code").style.color="white";
  document.getElementById("a6").style.color="white";
  document.getElementById("navig_bar").style.color="whitesmoke";
  document.getElementById("a1").style.color = "white";
  document.getElementById("a2").style.color = "white";
  document.getElementById("a3").style.color = "white";
  document.getElementById("a4").style.color = "white";
  document.getElementById("a5").style.color = "white";
  document.getElementsByClassName("cube")[2].style.borderColor="#61dafb";
  document.getElementById("Body").style.backgroundColor="white";
  i=i+1;
}
else{
  document.getElementById("code").style.backgroundColor="beige";
 document.getElementById("code").style.color="black";
  document.getElementById("a6").style.color="black";
  document.getElementById("navig_bar").style.color="#333";
  document.getElementById("a1").style.color = "black";
    document.getElementById("a2").style.color = "black";
    document.getElementById("a3").style.color = "black";
    document.getElementById("a4").style.color = "black";
    document.getElementById("a5").style.color = "black";
  document.getElementsByClassName("cube")[2].style.borderColor="gray";
  document.getElementById("Body").style.backgroundColor="gray";


  i=i+1;
}
}

function python() {
  lang="Python";
  document.getElementById("codeBox").innerHTML = pyt;
  editor.session.setMode("ace/mode/python");
}
function C(){
  lang="C";
  document.getElementById("codeBox").innerHTML = c; 
  editor.session.setMode("ace/mode/c_cpp");

}
function Java(){
  lang="Java";
  document.getElementById("codeBox").innerHTML = c; 
  editor.session.setMode("ace/mode/java");
}
function Cpp(){
  lang="Cpp";
  document.getElementById("codeBox").innerHTML = b; 
  editor.session.setMode("ace/mode/c_cpp");
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    /*document.getElementById("ab").style.fontSize = "10px";
    document.getElementsByClassName("topnav")[0].style.overflow = "hidden";
    document.getElementsByClassName("topnav")[1].style.color = "white";*/
    document.getElementById("pp").style.overflow = "hidden";
    document.getElementById("a1").style.color = "white";
    document.getElementById("a2").style.color = "white";
    document.getElementById("a3").style.color = "white";
    document.getElementById("a4").style.color = "white";
    document.getElementById("a5").style.color = "white";
    document.getElementById("a5").style.fontSize = "20px";
  } else {
    document.getElementById("pp").style.overflow = "visible";
    document.getElementById("a1").style.color = "black";
    document.getElementById("a2").style.color = "black";
    document.getElementById("a3").style.color = "black";
    document.getElementById("a4").style.color = "black";
    document.getElementById("a5").style.color = "black";
    document.getElementById("a5").style.fontSize = "40px";
  /*document.getElementsByClassName("topnav")[0].style.overflow = "visible"; 
  document.getElementsByClassName("topnav")[1].style.color = "black";
    document.getElementById("ab").style.fontSize = "30px";*/
  }
}

function CurlyBrac(){
 var txt=document.getElementById("code").value;
  document.getElementById("code").value=txt+"{}";
}
function SimpleBrac(){
  var txt=document.getElementById("code").value;
   document.getElementById("code").value=txt+"()";
 }
 function SquareBrac(){
  var txt=document.getElementById("code").value;
   document.getElementById("code").value=txt+"[]";
 }
 function Tab(){
  var txt=document.getElementById("code").value;
   document.getElementById("code").value=txt+"  ";
 }
 function DoubleQuotes(){
  var txt=document.getElementById("code").value;
   document.getElementById("code").value=txt+"\"\"";
 }
 function Colon(){
  var txt=document.getElementById("code").value;
   document.getElementById("code").value=txt+":";
 }
 function SemiColon(){
  var txt=document.getElementById("code").value;
   document.getElementById("code").value=txt+";";
 }
 function Add(){
  var txt=document.getElementById("code").value;
   document.getElementById("code").value=txt+"+";
 }
 function Subtract(){
  var txt=document.getElementById("code").value;
   document.getElementById("code").value=txt+"-";
 }
 function Multiply(){
  var txt=document.getElementById("code").value;
   document.getElementById("code").value=txt+"*";
 }
 function Divide(){
  var txt=document.getElementById("code").value;
   document.getElementById("code").value=txt+"/";
 }
 function Equal(){
  var txt=document.getElementById("code").value;
   document.getElementById("code").value=txt+"=";
 }
 function GreaterThan(){
  var txt=document.getElementById("code").value;
   document.getElementById("code").value=txt+">";
 }
 function LessThan(){
  var txt=document.getElementById("code").value;
   document.getElementById("code").value=txt+"<";
 }
 function Modulo(){
  var txt=document.getElementById("code").value;
   document.getElementById("code").value=txt+"%";
 }
function syntax() {
  var x = document.getElementById("syntax_bar");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  //document.getElementById("syntax_bar").classList.toggle("show");
}
/*function fullScreen(){
  var x = document.getElementById("code");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}*/
/* SYNTAX FOR LOOPS CODE HERE>>>>>>>>>>>>
function syntax2() {
  var x = document.getElementById("syntax_bar2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    if (lang=="Python"){
      function for1(){
        var txt=document.getElementById("code").value;
   document.getElementById("code").value=txt+"for i in range(i,j):\n\
   ";
      }
      function while1(){
        var txt=document.getElementById("code").value;
   document.getElementById("code").value=txt+"for ? in range(?,?):\n\
   ";
    }
}*/
function demo() {
  
    var x = document.getElementById("iddemo");
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.height = "100%";
      x.style.width = "100%";
      document.getElementById("a7").style.display="none";
    } else {
      x.style.display = "none";
      document.getElementById("a7").style.display="block";
      document.getElementById("a7").style.height="600px";
      document.getElementById("a7").style.position="fixed";

    }
  
  //document.getElementById("iddemo").classList.toggle("show");
}
function trial(){
  if (k%2==0){
  document.getElementById("code").style.height="100%";
  document.getElementById("code").style.width="100%";
  //document.getElementById("code").style.position="sticky";
  document.getElementById("output").style.display="none";
  document.getElementsByClassName("header").style.position="static";
  document.getElementsByClassName("topnav")[0].style.position="static";
  document.getElementById("navig_bar").style.position="static";


k=k+1;
}
else{
  document.getElementById("code").style.height="20%";
  document.getElementById("code").style.position="inherit";
  document.getElementById("output").style.display="block";
  document.getElementsByClassName("header").style.position="sticky";
  document.getElementsByClassName("topnav").style.position="sticky";


k=k+1;
}
}
var elem = document.getElementById("code");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
