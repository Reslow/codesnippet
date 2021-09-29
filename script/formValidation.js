

function validateForm(){
  let lname = document.forms["myform"]["lname"].value
  let fname = document.forms["myform"]["fname"].value
  let email = document.forms["myform"]["email"].value
  let message = document.forms["myform"]["message"].value
  
  if (fname == ""){
    alert ("the inputfield is empty, please fill out your first name")
    return false
  } 
  if (lname == ""){
    alert ("the inputfield is empty, please fill out your last name")
    return false
  }if (email == ""){
    alert ("the inputfield is empty, please fill out your email")
    return false
  }if (message == ""){
    alert ("please fill ut your message before submit")
    return false
  }
}

function checkbox(){
  let checkbox = document.getElementById("gdpr");
  
  if (checkbox.checked == false ){
    alert ("you need to accept our GDPR terms")
  
} 


}



