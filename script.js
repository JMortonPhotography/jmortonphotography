const bookingForm = document.querySelector(".booking-form");
const formSuccess = document.querySelector("#form-success");

if (bookingForm) {
    bookingForm.addEventListener("submit", function () {
        const submitButton = bookingForm.querySelector('button[type="submit"]');

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }
    });
}
