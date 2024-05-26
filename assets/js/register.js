let carduuid = document.getElementById("cardUiid");
let registerCard = document.getElementById("registerCard");


registerCard.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally
  const url = `http://localhost:4000/signup/?username=${carduuid.value}`;
  // const url = http://handsome-puce-snapper.cyclic.app/transact/?id=${id}&op=sub&amount=${amount.value};
  let registerCardFunc = async () => {
    try {
      // Send the POST request
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        alert("error");
        throw new Error(`HTTP error status: ${response.status}`);
      }
      alert("Card registered successfully");
    //   window.location.href = "/Smart-public-toilet-door-register-system/index.html";
      window.location.href = "/index.html";
    } catch (error) {
      console.error("Error:", error);
    }
  };
  registerCardFunc();
});