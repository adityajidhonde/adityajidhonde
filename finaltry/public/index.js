// document.addEventListener('DOMContentLoaded', function() {
//   window.addEventListener('scroll', myFunction);

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
// })

var goti;
var editor,xd,xd1;
//Default function to setup editor 
window.onload = function() {
editor = ace.edit(document.getElementById("codeBox"));
editor.setTheme("ace/theme/eclipse");
editor.session.setMode("ace/mode/c_cpp");
};

//Change language function
// function langchang(){
//     xd = document.getElementById("mySelect").selectedIndex;
//     xd1 = document.getElementsByTagName("option")[xd].value;
//     if(xd1 == "cpp"){
//       editor.session.setMode("ace/mode/c_cpp");
//     }else if(xd1 == "java"){
//       editor.session.setMode("ace/mode/java");
//     }else if(xd1 == "python"){
//       editor.session.setMode("ace/mode/python");
//     }else if(xd1 == "csharp"){
//       editor.session.setMode("ace/mode/csharp");
//     }else if(xd1 == "vb"){
//       editor.session.setMode("ace/mode/vbscript");
//     }
//   }
// $("#input").val() 
function ec(){
$.post('/res', { code: editor.getValue(),input: $("#inputBox").val() ,lang: lang }, function(rest) {
    goti=rest;
    console.log(goti);
    document.getElementById('op').value = goti;
});
}
