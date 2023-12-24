const payBtn = document.querySelector("#pay-btn");
const giveForm = document.getElementById("give-form");

const initiatePay = (phone, amount) => {
  var url = " https://tinypesa.com/api/v1/express/initialize";

  fetch(url, {
    body: `amount=${amount}&msisdn=${phone}hu`,
    headers: {
      Apikey: "erwyuweoyf",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  });
};
giveForm.onsubmit = function (e) {
  e.preventDefault();
  const phone = document.querySelector(".phone-number").value;
  const amount = document.querySelector(".amount").value;
  initiatePay(phone, amount);
};
