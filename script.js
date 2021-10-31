var email = document.querySelector(".email").value;
var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;





function validation(event){
  if (regex.test(email)) {

  } else {
    document.querySelector(".error").style.visibility = "visible";
    event.preventDefault();
  }
}
