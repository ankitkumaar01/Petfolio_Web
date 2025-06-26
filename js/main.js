//  ++++++++++++++++ Slik Slider Here ++++++++++++++++++++

console.log(
  "jQuery version:",
  typeof jQuery !== "undefined" ? jQuery.fn.jquery : "jQuery not loaded"
);

console.log(
  "Slick is",
  typeof $.fn.slick !== "undefined" ? "loaded ✅" : "NOT loaded ❌"
);

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
  });
});

//  ++++++++++++++ Accordian Sections Here ++++++++++++++++

const accordians = document.querySelectorAll(".accordian");

accordians.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordians.forEach((acc) => {
      if (acc !== accordion) {
        acc.classList.remove("active");
        acc.nextElementSibling.style.maxHeight = null;
      }
    });

    // Panel Open or Close using toggle here

    accordion.classList.toggle("active");

    const panel = accordion.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
