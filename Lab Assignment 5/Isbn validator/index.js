var pattern = /^(97(8|9))?-?\d{1}-?\d{5}-?\d{3}-?\d$/;
var isbn= document.getElementById('isbn');

function validate(){
if(pattern.test(isbn.value)){
    document.getElementById('val').innerHTML="VALID";
    document.getElementById('val').style.color="green"
}else{
    document.getElementById('val').innerHTML="INVALID";
    document.getElementById('val').style.color="red"
}

}