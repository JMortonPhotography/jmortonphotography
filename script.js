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