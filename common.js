const $hd = document.querySelector(".hd");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  if (scrollTop > 0) {
    $hd.classList.add("on");
  } else {
    $hd.classList.remove("on");
  }
});

const $elm = document.querySelectorAll("section");
const elmCount = $elm.length;

$elm.forEach(function (item, idx) {
  item.addEventListener("mousewheel", function (event) {
    let delta = 0;
    if (event.wheelDelta) {
      delta = event.wheelDelta;
    }

    let moveTop = window.scrollY;
    let elmSelector = $elm[idx];

    if (delta < 0) {
      if (elmSelector !== elmCount - 1) {
        try {
          moveTop =
            window.pageYOffset +
            elmSelector.nextElementSibling.getBoundingClientRect().top;
        } catch (event) {}
      }
    } else {
      if (elmSelector !== 0) {
        try {
          moveTop =
            window.pageYOffset +
            elmSelector.previousElementSibling.getBoundingClientRect().top;
        } catch (event) {}
      }
    }
    window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
  });
});

// 모바일 슬라이드
var swiper1 = new Swiper(".m_thumb_con", {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
//sec2
var swiper1 = new Swiper(".thumb_con", {
  slidesPerView: 5,
  spaceBetween: 40,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const $btnHam = document.querySelector(".menu_btn");
const $gnb = document.querySelector(".gnb");
$btnHam.addEventListener("click", function () {
  $gnb.classList.toggle("on");
  $btnHam.classList.toggle("on");
});

console.log(
  `
  :::    :::  ::::::::::  :::         :::          ::::::::  
  :+:    :+:  :+:         :+:         :+:         :+:    :+: 
  +:+    +:+  +:+         +:+         +:+         +:+    +:+ 
  +#++:++#++  +#++:++#    +#+         +#+         +#+    +:+ 
  +#+    +#+  +#+         +#+         +#+         +#+    +#+ 
  #+#    #+#  #+#         #+#         #+#         #+#    #+# 
  ###    ###  ##########  ##########  ##########   ########                                             
`
);
console.log("https://github.com/chaennn");
console.log(
  `%c카카오톡 ID입니다. 용건이 있으시면 연락주세요:) chaen_hhh`,
  `color:white`
);
