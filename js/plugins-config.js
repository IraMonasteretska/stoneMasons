if (document.querySelector(".home-slider__slider")) {
  $(".home-slider__slider").slick({
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3500,
  });

  let dotsInner = document.querySelectorAll(".home-slider__dots-item");
  let dotsHome = document.querySelectorAll(".home-slider .slick-dots button");
  for (let i = 0; i < dotsHome.length; i++) {
    dotsHome[i].innerHTML = dotsInner[i].innerHTML;
  }
}
if (document.querySelector(".two-slider__slider")) {
  $(".two-slider__slider").slick({
    slidesToShow: 1,
    infinite: false,
    dots: false,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "20%",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 860,
        settings: {
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 766,
        settings: {
          infinite: true,
          centerMode: false,
        },
      },
    ],
  });

  let myPrevBtn = document.querySelector(".two-slider__prev");
  let sliderPrevBtn = document.querySelector(".two-slider__slider .slick-prev");
  let myNextBtn = document.querySelector(".two-slider__next");
  let sliderNextBtn = document.querySelector(".two-slider__slider .slick-next");

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

  if (sliderPrevBtn.classList.contains("slick-disabled")) {
    myPrevBtn.classList.add("my-disabled");
  }

  $(".two-slider__slider").on(
    "afterChange",
    function (event, slick, currentSlide) {
      if (sliderPrevBtn.classList.contains("slick-disabled")) {
        myPrevBtn.classList.add("my-disabled");
      } else {
        myPrevBtn.classList.remove("my-disabled");
      }
      if (sliderNextBtn.classList.contains("slick-disabled")) {
        myNextBtn.classList.add("my-disabled");
      } else {
        myNextBtn.classList.remove("my-disabled");
      }
      updateSliderCounter(slick, currentSlide);
    }
  );

  myPrevBtn.addEventListener("click", () => sliderPrevBtn.click());
  myNextBtn.addEventListener("click", () => sliderNextBtn.click());
}
