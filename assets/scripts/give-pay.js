const payBtn = document.querySelector("#pay-btn");
const giveForm = document.getElementById("give-form");
const headers = {
    'Content-Type': 'application/json',
    'Apikey': `QEUwQqdYREw`
};

const initiatePay = (phone, amount) => {
    axios
    .post("https://tinypesa.com/api/v1/express/initialize", {
        amount: amount,
        msisdn: phone,
    }, { headers: headers })
    .then((res) => {
        console.log(res.data);
        if (res.data.status === "success") {
            window.location.href = res.data.data.authorization_url;
        }
    })
    .catch((error) => {
        console.error("Error initiating payment:", error);
    });
}

giveForm.onsubmit = function (e) {
    e.preventDefault();
    const phone = document.querySelector(".phone-number").value;
    const amount = document.querySelector(".amount").value;
    initiatePay(phone, amount);
};
