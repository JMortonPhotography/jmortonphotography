const bookingForm = document.querySelector(".booking-form");
const formSuccess = document.querySelector("#form-success");
const hiddenIframe = document.querySelector("#hidden_iframe");

let formSubmitted = false;

if (bookingForm) {
    bookingForm.addEventListener("submit", function () {
        // DO NOT prevent the form from submitting.
        formSubmitted = true;
    });
}

if (hiddenIframe) {
    hiddenIframe.addEventListener("load", function () {
        if (formSubmitted) {
            if (formSuccess) {
                formSuccess.style.display = "block";
            }

            if (bookingForm) {
                bookingForm.reset();
            }

            formSubmitted = false;
        }
    });
}
