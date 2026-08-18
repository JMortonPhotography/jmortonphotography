const menuButton = document.querySelector(".menu-toggle");

const navigation = document.querySelector(".nav-menu");


menuButton.addEventListener("click", function () {

    navigation.classList.toggle("active");

});


const navigationLinks = document.querySelectorAll(".nav-menu a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

    });

});
const bookingForm = document.querySelector(".booking-form");
const formSuccess = document.querySelector(".form-success");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(bookingForm);

  const bookingForm = document.querySelector(".booking-form");
const formSuccess = document.querySelector(".form-success");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(bookingForm);

        fetch("https://script.google.com/macros/s/AKfycbzs1ocfPLZQhtnwjGumIAzw_643lGjVWKJmEQ7E5mBSC8UhEJEGoZQQsfIN-asKJg9o6w/exec", {
            method: "POST",
            mode: "no-cors",
            body: new URLSearchParams(formData)
        });

        bookingForm.reset();

        if (formSuccess) {
            formSuccess.style.display = "block";
        }
    });
}
