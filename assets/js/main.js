// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

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

fetch('https://public-bn.onrender.com/signup/')
.then(response => response.json())
.then(async (resp) => {
    // Assuming resp.data is the array you want to store
    storedBlogs = await resp.data;
    localStorage.setItem('all_users', JSON.stringify(storedBlogs));

    // Now you can use storedBlogs here
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
        
            const statusCell = document.createElement('td');
            const statusSpan = document.createElement('span');
            statusSpan.className = `status`;
            statusSpan.textContent = "user.status"; // This line seems to be incorrect. You probably meant statusSpan.textContent = user.status;
            statusCell.appendChild(statusSpan);
            row.appendChild(statusCell);
            // Append the row to the table body
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

 
