document.getElementById('login-link').addEventListener('click', function(event) {
  event.preventDefault(); 

  window.location.href = 'login.html'; 
});

const loginForm = document.querySelector('.login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

document.getElementById('login-button').addEventListener('click', function(event) {
  event.preventDefault(); 

  

  window.location.href = 'hjem.html'; 
});

document.getElementById('search-button').addEventListener('click', function() {
  var searchTerm = document.getElementById('search-input').value;
  
  console.log('Search term: ' + searchTerm);
});

document.getElementById('login-button').addEventListener('click', function() {
  window.location.href = 'hjem.html'; 
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    var activeElement = document.activeElement;
    if (activeElement === usernameInput || activeElement === passwordInput) {
      event.preventDefault(); 

      

      window.location.href = 'hjem.html'; 
    }
  }
});
