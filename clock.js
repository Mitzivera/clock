"use strict";
/*
Mitzi
October 16 2018
CISC131

Display the current time
*/

window.onload =function ()
{
updateClock();
seen();
window.setInterval(updateClock,200);
color();
};

function updateClock()
{
    // it get the current time 
var now;
var hour;
var minute;
var second;
now=new Date();
hour=now.getHours();
document.getElementById("hour").innerHTML=padWithZeroCharacters(hour);
minute=now.getMinutes();
document.getElementById("minutes").innerHTML=padWithZeroCharacters(minute);
second=now.getSeconds();
document.getElementById("second").innerHTML=padWithZeroCharacters(second);
}
function seen()
{
    // turn the visibility of the clock section on
document.getElementById("hour").style.visibility="visible";
document.getElementById("minutes").style.visibility="visible";
document.getElementById("second").style.visibility="visible";
document.getElementById("clock").style.visibility="visible";
}
function padWithZeroCharacters(source)
{
    // it adds the zero to the time, so that there is two digit instead of one
var pad;
var result;
pad="00";
result=pad+source;
return result.substring(result.length-2);
}
function color()
{
    // changes the font color of hour, minute and second
var h;
var m; 
var s;
var middle;
h=document.getElementById("hour").style.color="thistle";
m=document.getElementById("minutes").style.color="thistle";
s=document.getElementById("second").style.color="thistle";
middle=document.getElementById("clock").style.color="gray";
}

