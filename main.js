//TASK1-CALCULATOR FUNCTIONS
function addition(a,b) {
    return a+b;
}
function substract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}
function perc(a,b) {
    return (a/100)*b;
}
function sqrt(a) {
    var x=Math.sqrt(a);
    if(Number.isInteger(x)){
        return x;
    }
    else
        return x.toFixed(3);
    
}
function abs(a) {
    return Math.abs(a);
}

function display(val)
{
document.getElementById('displayid').value+=val;
 }
 function clr(){
    document.getElementById('displayid').value="";
 }
 function calci_main(){
    var x=document.getElementById('displayid').value;
    var ar=x.split(' ')
    const numbers = x.split(/\D/g);
    const op = x.split(/\d/g).filter(Boolean);
    const numop=numbers.concat(op);
    console.log(numop);
    console.log(ar);
    //for both positive
    if((numop[2]=="+")||(numop[2]=="-")||(numop[2]=="/")||(numop[2]=="*")){
        var a=parseInt(numop[0],10);
        var b=parseInt(numop[1],10);
        if(numop[2]=="+"){
            document.getElementById('displayid').value=addition(a,b);
        }
        else if(numop[2]=="-"){
            document.getElementById('displayid').value=substract(a,b);
        }
        else if(numop[2]=="*"){
            document.getElementById('displayid').value=multiply(a,b);
        }
        else if(numop[2]=="/"){
            document.getElementById('displayid').value=divide(a,b);
        }
    }
    //for a=negative and b is positive
    else if((numop[4]=="+")||(numop[4]=="-")&&(numop[5]==null)||(numop[4]=="/")||(numop[4]=="*")){
        var a=parseInt(numop[1],10);
        var b=parseInt(numop[2],10);
        a=-a;
        if(numop[4]=="+"){
            document.getElementById('displayid').value=addition(a,b);
        }
        else if(numop[4]=="-"){
            document.getElementById('displayid').value=substract(a,b);
        }
        else if(numop[4]=="*"){
            document.getElementById('displayid').value=multiply(a,b);
        }
        else if(numop[4]=="/"){
            document.getElementById('displayid').value=divide(a,b);
        }
    }
    //for a=positive and b negative
    else if((numop[3]=="+-")||(numop[3]=="--")||(numop[3]=="/-")||(numop[3]=="*-")){
        var a=parseInt(numop[0],10);
        var b=parseInt(numop[2],10);
        b=-b;
        if(numop[3]=="+-"){
            document.getElementById('displayid').value=addition(a,b);
        }
        else if(numop[3]=="--"){
            document.getElementById('displayid').value=substract(a,b);
        }
        else if(numop[3]=="*-"){
            document.getElementById('displayid').value=multiply(a,b);
        }
        else if(numop[3]=="/-"){
            document.getElementById('displayid').value=divide(a,b);
        }
    }
    //for both negative
    else if((numop[5]=="+-")||(numop[5]=="--")||(numop[5]=="/-")||(numop[5]=="*-")){
        var a=parseInt(numop[1],10);
        var b=parseInt(numop[3],10);
        a=-a;
        b=-b;
        if(numop[5]=="+-"){
            document.getElementById('displayid').value=addition(a,b);
        }
        else if(numop[5]=="--"){
            document.getElementById('displayid').value=substract(a,b);
        }
        else if(numop[5]=="*-"){
            document.getElementById('displayid').value=multiply(a,b);
        }
        else if(numop[5]=="/-"){
            document.getElementById('displayid').value=divide(a,b);
        }
    }
    else if(numop[2]=="%"){
        var a=parseInt(numop[0],10);
        var b=parseInt(numop[1],10);
        document.getElementById('displayid').value=perc(a,b).toFixed(2);
    }
    else if(ar[0]=="abs"){
        var a=parseInt(ar[1],10);
         document.getElementById('displayid').value=abs(a);
            }
    else{
        var a=parseInt(ar[1],10);
        document.getElementById('displayid').value=sqrt(a);
    }
 }


// FORM VALIDATION FUNCTIONS

function namevalid(name) {
        var patt=/^[A-Z a-z][A-Z a-z 0-9]*$/;
    if (name.value.match(patt)){
        return true;
    }
    else
    {
        alert("In UserName First Character Should Not be Number");
        name.focus();
        return false;
    }

    
}
function numvalid(num){
    var number=/^[0-9]+$/;
    if((num.value.match(number))&&(num.value.length==10)){
        return true;
    }
    else{
        alert("Phone no should contain only numbers and Should Be 10 digits Onlys");
        num.focus();
        return false;
    }

}
function emailvalid(email) {
    var emailv=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(emailv)){
        return true;
    }
    else{
        alert("Invalid email address");
        email.focus();
        return false;
    }
}
function checkcheckboxes(subject1,subject2,subject3){
    if((subject1.checked==false)&&(subject2.checked==false)&&(subject2.checked==false)){
        alert("you didnt check any of the boxes");
        return false;
    }
    else 
    {
        return true;
    }

}
function formvalid(){
    var name=document.getElementById('fname');
    var num=document.getElementById('phoneno');
    var email=document.getElementById('email');
    var subject1=document.getElementById('subject1');
    var subject2=document.getElementById('subject2');
    var subject3=document.getElementById('subject3');
    if((namevalid(name))&&(numvalid(num))&&emailvalid(email)&&checkcheckboxes(subject1,subject2,subject3)){
        return true;
    }
    else{
        return false;
    }
}



//PALINDROME AND ANAGRAM CHECKER FUNCTION

function string_valid(x){
    var patt = "^[a-zA-Z ]+$";
    if(x.value.match(patt)){
    	return true;
    }
    else
    {
    	alert("ONLY ALPHABETS ALLOWED");
    	return false;
    }
}
function pal_check(){
	var task3_str1=document.getElementById('task3_palword');
	
	if(string_valid(task3_str1)){
		var len=task3_str1.value.length;
       for ( var i = 0; i < len-1; i++ ) {
        if (task3_str1.value[i] !== task3_str1.value[len - 1 - i]) {
            document.getElementById('task3_palcheck').innerHTML="THE GIVEN WORD IS NOT A PALINDROME";
            return false;
        }
     }
     document.getElementById('task3_palcheck').innerHTML="THE GIVEN WORD IS A PALINDROME";
     return true;
	}
	else{
		return false;
	}
}

function ana_check(){
	var task3_str1=document.getElementById('task3_anaword1');
	var task3_str2=document.getElementById('task3_anaword2');
	if((string_valid(task3_str1))&&(string_valid(task3_str2))){
		var str1=document.getElementById('task3_anaword1').value.split(' ').join('');
	    var str2=document.getElementById('task3_anaword2').value.split(' ').join('');
	    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
        str2 = str2.replace(/[^\w]/g, '').toLowerCase();
        if((str1.split('').sort().join('')) === (str2.split('').sort().join(''))){
        	document.getElementById('task3_anacheck').innerHTML="THE GIVEN WORD IS A ANAGRAM";
        	return true;
        }
        else{
        	document.getElementById('task3_anacheck').innerHTML="THE GIVEN WORD IS NOT A ANAGRAM";
        	return false;
        }
	}
	else{
		return false;
	}
}

//FUNCTION FOR HUMAN COCKROACH NUCLEAR BOMB GAME

function getrand_input1() {
    document.getElementById('task4_input1').value=Math.floor(Math.random()*1000);
}

function getrand_input2() {
     document.getElementById('task4_input2').value=Math.floor(Math.random()*1000);
}

function get_winner(x,y) {
     if(((x===0)&&(y===1))||((x===1)&&(y===2))||((x===2)&&(y===0))){
        return 1;
     }
     else if(((x===1)&&(y===0))||((x===2)&&(y===1))||((x===0)&&(y===2))){
        return 2;
     }
     else{
        return "tie";
     }
}


function generate_winner(){
    var x=document.getElementById('task4_input1');
    var y=document.getElementById('task4_input2');
    document.getElementById('output1').innerHTML="Object 1 Is  " + x.value;
    document.getElementById('output2').innerHTML="Object 2 Is  " + y.value;
    var map1=x.value%3;
    var map2=y.value%3;
    document.getElementById('after_mapping').innerHTML="AFTER MAPPING:";
    if(map1===0){
        document.getElementById('map1').innerHTML="Object 1 Is HUMAN i.e " + map1;
    }
    else if(map1===1){
        document.getElementById('map1').innerHTML="Object 1 Is COCKROACH i.e " + map1;
    }
    else{
        document.getElementById('map1').innerHTML="Object 1 Is NUCLEAR BOMB i.e " + map1;
    }
    if(map2===0){
        document.getElementById('map2').innerHTML="Object 2 Is HUMAN i.e " + map2;
    }
    else if(map2===1){
        document.getElementById('map2').innerHTML="Object 2 Is COCKROACH i.e " + map2;
    }
    else{
        document.getElementById('map2').innerHTML="Object 2 Is NUCLEAR BOMB i.e " + map2;
    }

    if(get_winner(map1,map2)===1){
        document.getElementById('winner').innerHTML="OBJECT 1 WINS!!!!!!!!";
    }
    else if(get_winner(map1,map2)===2){
        document.getElementById('winner').innerHTML="OBJECT 2 WINS!!!!!!!!";
    }
    else{
        document.getElementById('winner').innerHTML="ITS A TIE!!!!";
    }
    

}