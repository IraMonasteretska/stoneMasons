if (document.querySelectorAll(".home-slider__slider")) {
  $(".home-slider__slider").slick({
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    dots: true,
  });

  let dotsInner = document.querySelectorAll(".home-slider__dots-item");
  let dotsHome = document.querySelectorAll(".home-slider .slick-dots button");
  for (let i = 0; i < dotsHome.length; i++) {
    dotsHome[i].innerHTML = dotsInner[i].innerHTML;
  }
}
if (document.querySelectorAll(".two-slider__slider")) {
  $(".two-slider__slider").slick({
    slidesToShow: 1,
    infinite: false,
    // arrows: false,
    dots: false,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "400px",
  });

  $(".two-slider__all-slide").text(
    "0" + document.querySelectorAll(".two-slider__slider-item ").length
  );
  let currentSlide;
  const updateSliderCounter = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    $(".two-slider__current-slide").text("0" + currentSlide);
  };

  $(".two-slider__slider").on("init", function (event, slick) {
    updateSliderCounter(slick);
  });

  $(".two-slider__slider").on(
    "afterChange",
    function (event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    }
  );

  let myPrevBtn = document.querySelector(".two-slider__prev");
  let sliderPrevBtn = document.querySelector(".two-slider__slider .slick-prev");
  let myNextBtn = document.querySelector(".two-slider__next");
  let sliderNextBtn = document.querySelector(".two-slider__slider .slick-next");
  myPrevBtn.addEventListener("click", () => sliderPrevBtn.click());
  myNextBtn.addEventListener("click", () => sliderNextBtn.click());
}
