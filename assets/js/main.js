// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");
let button = document.querySelectorAll(".signup-btn");
let amount = document.getElementById("amount");


let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

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
              // alert("this row is clicked");
              
              window.location.href = `/sendtocard.html?id=${user.username}`;

          });
            table.querySelector('tbody').appendChild(row);
        });
    }
});
const table = document.querySelector('.details table');

function getIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

addAmount.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
alert('add amount clicked');

const id = getIdFromUrl();

const url = `https://handsome-puce-snapper.cyclic.app/transact/?id=${id}&op=add&amount=${amount.value}`;
// const url = `http://handsome-puce-snapper.cyclic.app/transact/?id=${id}&op=sub&amount=${amount.value}`;
let  updateWallet = async () => {
  
try {
    // Send the POST request
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
      alert('error');
        throw new Error(`HTTP error status: ${response.status}`);
    }
    alert('Amount added successfully');
    window.location.href = `/index.html`;

} catch (error) {
    console.error('Error:', error);
}}
updateWallet();

});

