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
const formSuccess = document.querySelector("#form-success");

if (bookingForm) {
    bookingForm.addEventListener("submit", function () {
        setTimeout(function () {
            bookingForm.reset();
            formSuccess.style.display = "thank you";
        }, 1000);
    });
}
