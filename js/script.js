// Log in

const loginForm = document.querySelector('.login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

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


// HJEM

document.getElementById('search-button').addEventListener('click', function() {
  var searchTerm = document.getElementById('search-input').value;
  
  console.log('Search term: ' + searchTerm);
});

const heartButton = document.getElementById('my-heart-button');

heartButton.addEventListener('click', toggleClickedState);

const menuItems = document.querySelectorAll('.menu li');


menuItems.forEach((menuItem) => {
  const subMenu = menuItem.querySelector('.sub-menu');

  menuItem.addEventListener('mouseenter', () => {
    subMenu.style.display = 'block';
  });

  menuItem.addEventListener('mouseleave', () => {
    subMenu.style.display = 'none';
  });
});

// Hjem

function toggleLikeButton() {
  var button = document.querySelector('.card-heart-button');
  button.classList.toggle('liked');
}
