// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");
let button = document.querySelectorAll(".signup-btn");

console.log("test form loaded")

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// Declare storedBlogs outside of the fetch call to make it accessible in the subsequent code
let storedBlogs = [];

fetch('https://handsome-puce-snapper.cyclic.app/signup')
// fetch('https://public-bn.onrender.com/signup/')
.then(response => response.json())
.then(async (resp) => {
    storedBlogs = await resp.data;
    localStorage.setItem('all_users', JSON.stringify(storedBlogs));

    if (storedBlogs) {
        console.log("storedBlogs : ");
        storedBlogs.forEach(user => {
            console.log("each user : ");
            console.log(user);
            const row = document.createElement('tr');
        
            const cardNoCell = document.createElement('td');
            cardNoCell.textContent = user.username;
            row.appendChild(cardNoCell);
        
            const priceCell = document.createElement('td');
            priceCell.textContent = user.wallet;
            row.appendChild(priceCell);
        
            const statusSpan = document.createElement('span');
            statusSpan.className = `status`;
            statusSpan.textContent = user.email;
            const statusCell = document.createElement('td');
            statusCell.appendChild(statusSpan);
            row.appendChild(statusCell);
            // Append the row to the table body
            row.addEventListener('click', () => {
              alert("this row is clicked", user.username, user.wallet, user.email);
              // window.location.href = '/sendtocard.html';

          });
            table.querySelector('tbody').appendChild(row);
        });
    }
});
const users = [
  { cardNo: '220202020', price: '100 Frw', status: 'Paid' },
  { cardNo: '220202020', price: '100 Frw', status: 'not paid' },
  { cardNo: '220202020', price: '100 Frw', status: 'in Progress' }
];

// Step 2: Select the table element
const table = document.querySelector('.details table');

// Step 3: Iterate over the array of users and insert them into the table

// document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');

  button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the form from submitting normally

      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('consfirm_password').value;

      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
  });
// });
