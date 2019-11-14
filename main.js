var men = function(pounds){
 document.getElementById('output').style.visibility='visible';
 document.getElementById('gramsoutput').innerHTML = pounds/0.0022046;
 document.getElementById('kgramsoutput').innerHTML = pounds/2.2046;
 document.getElementById('ouncesoutput').innerHTML = pounds*16;

}


var hide = function(){

document.getElementById('output').style.visibility='hidden';

}