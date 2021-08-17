document.getElementById('login-submit').addEventListener('click',function () {
  // get user email 
  const emailField = document.getElementById('user_email')
  const userEmail = emailField.value
  
  // get user password 
  const passwordField = document.getElementById('user_password')
  const userPassword = passwordField.value
 
  if (userEmail == 'joy@gmail.com' && userPassword ==123){
  window.location.href = "banking.html";
  } 
})


