// step -1; add click event handler with sumbmit button
document.getElementById('btn-submit').addEventListener('click', function () {
  // step-2; get the email address inside the email input
  // always remenber to use .value to get text from an input field
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
  // step-3; get password
  // 3. a; set id on the element
  // 3. b; get the element
  // 3. c; get the value  from the element

  const passwordField = document.getElementById('user-password');
  const password = passwordField.value;

  //DANGER: DO NOT VERIFY email password on the client side
  // step-4; verify email and password and check whether valid user or not
  if (email === 'shakib@gmail.com' && password === 'shakib') {
    window.location = './../bank.html';
  } else {
    alert('tui password vule gesos!! Toke ami teijjo sontan gosona korlam');
  }
});
