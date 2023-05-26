document.getElementById('login-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  window.location.href = 'login.html'; // Redirect to login.html
});

const loginForm = document.querySelector('.login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

document.getElementById('login-button').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission

  // Perform login logic here

  window.location.href = 'hjem.html'; // Redirect to hjem.html
});

document.getElementById('search-button').addEventListener('click', function() {
  var searchTerm = document.getElementById('search-input').value;
  // Perform search operation with the searchTerm value
  console.log('Search term: ' + searchTerm);
});

document.getElementById('login-button').addEventListener('click', function() {
  window.location.href = 'hjem.html'; // Redirect to hjem.html
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    var activeElement = document.activeElement;
    if (activeElement === usernameInput || activeElement === passwordInput) {
      event.preventDefault(); // Prevent form submission on Enter key

      // Perform any login logic here if needed

      window.location.href = 'hjem.html'; // Redirect to hjem.html
    }
  }
});
