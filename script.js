const bookingForm = document.querySelector(".booking-form");
const formSuccess = document.querySelector(".form-success");

if (bookingForm) {
  bookingForm.addEventListener("submit", function () {
    setTimeout(function () {
      bookingForm.reset();

      if (formSuccess) {
        formSuccess.style.display = "block";
      }
    }, 1000);
  });
}