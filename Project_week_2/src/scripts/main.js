document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var usernameInput = document.getElementById('username');
  var passwordInput = document.getElementById('password');

  if (!usernameInput.checkValidity()) {
    usernameInput.classList.add('invalid');
    usernameInput.classList.remove('valid');
    usernameInput.addEventListener('animationend', removeShakeAnimation);
  } else {
    usernameInput.classList.remove('invalid');
    usernameInput.classList.add('valid');
  }

  if (!passwordInput.checkValidity() || passwordInput.value.length < 6) {
    passwordInput.classList.add('invalid');
    passwordInput.classList.remove('valid');
    passwordInput.addEventListener('animationend', removeShakeAnimation);
  } else {
    passwordInput.classList.remove('invalid');
    passwordInput.classList.add('valid');
  }

  checkUppercase(usernameInput.value);

  function1();
});

function removeShakeAnimation() {
  this.classList.remove('invalid');
  this.removeEventListener('animationend', removeShakeAnimation);
}

function checkUppercase(inputValue) {
  if (/[A-Z]/.test(inputValue)) {
    var usernameInput = document.getElementById('username');
    usernameInput.classList.add('invalid');
    usernameInput.classList.remove('valid');
    usernameInput.addEventListener('animationend', removeShakeAnimation);
  }
}

function function1() {
  var field1 = document.getElementById('username').value;
  var field2 = document.getElementById('password').value;

  if (field1 === '' || field2 === '') {
    alert('Please fill all fields');
  } else {
    alert('Your form is submitted');
  }
}
