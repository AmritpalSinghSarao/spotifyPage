function validation(){

   var x= document.getElementById("email").value;

    var regx= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,10})(.[a-zA-Z]{2,10})$/;
    var monthof31=/^(([0]?[1-9])|([1-2][0-9])|(3[01]))$/;    ;
    var monthof31=/^(([0]?[1-9])|([1-2][0-9])|(3[0]))$/;
    var mmonthfebrary=/^(([0]?[1-9])|([1-2][0-9]))$/;

    if(regx.test(x)!=true){

        document.getElementById('emailValid').innerHTML="Invalid Email";
        document.getElementById('emailValid').style.visibility="visible";
        document.getElementById('emailValid').style.color="red"; 
        return false;
    }else{
        
        document.getElementById('emailValid').style.visibility="hidden";
      
    }


    var email= document.getElementById("emailc").value;


    if(email!=x){
        document.getElementById('emailConfirm').innerHTML="Email must be the same";
        document.getElementById('emailConfirm').style.visibility="visible";
        document.getElementById('emailConfirm').style.color="red";
        return false;
    }else{

        document.getElementById('emailConfirm').style.visibility="hidden";
    }

    var password=document.getElementById('password').value;
    var lunghezza=password.length;

    
    if(lunghezza<8){
        document.getElementById('passValid').innerHTML="Password must be longer than 8 character";
        document.getElementById('passValid').style.visibility="visible";
        document.getElementById('passValid').style.color="red";
        return false;
    } else{
        document.getElementById('passValid').style.visibility="hidden";
    }

    var day=document.getElementById('day').value;
    var month=document.getElementById('month').value;
    var year=document.getElementById('year').value;


    if((month=="month")){
        document.getElementById('dobValid').innerHTML="Invalid Date of Birth";
        document.getElementById('dobValid').style.visibility="visible";
        document.getElementById('dobValid').style.color="red";
        return false;
    }
    else if((month=="Janaury" || month=="March" || month=="May" || month=="July" || month=="August"
    || month=="October" || month=="December") && monthof31.test(day)!=true) {
        document.getElementById('dobValid').innerHTML="Invalid Date of Birth";
        document.getElementById('dobValid').style.visibility="visible";
        document.getElementById('dobValid').style.color="red";
        return false;
    }
    else if((month=="April" || month=="June" || month=="May" || month=="September"
    || month=="November") && monthof30.test(day)!=true ){

        document.getElementById('dobValid').innerHTML="Invalid Date of Birth";
        document.getElementById('dobValid').style.visibility="visible";
        document.getElementById('dobValid').style.color="red";
        return false;

    }else if((month=="February") && monthfebrary.test(day)!=true ){
        document.getElementById('dobValid').innerHTML="Invalid Date of Birth";
        document.getElementById('dobValid').style.visibility="visible";
        document.getElementById('dobValid').style.color="red";
        return false;
    }else{
        document.getElementById('dobValid').style.visibility="hidden";
    }

    var currentdate= new Date();

    if(currentdate.getFullYear()-year<18){
        document.getElementById('dobValid').innerHTML="Person must be older than 18";
        document.getElementById('dobValid').style.visibility="visible";
        document.getElementById('dobValid').style.color="red";
        return false;
    }else{
        document.getElementById('dobValid').style.visibility="hidden";
    }


    
var username=document.getElementById('username').value;

if(username.length<4){
    document.getElementById('nameValid').innerHTML="Person must be older than 18";
    document.getElementById('nameValid').style.visibility="visible";
    document.getElementById('nameValid').style.color="red";
    return false;
}else{
    document.getElementById('nameValid').style.visibility="hidden";
}



}

