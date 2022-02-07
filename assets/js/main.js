"use strict";

$("#userPhone").inputmask();
var userNameInput = document.getElementById("userName");
var userPhoneInput = document.getElementById("userPhone");
$(document).ready(function () {
  $(".input-submit").addClass("button--disabled");
  $("#userName").keyup(function () {
    if ($(this).val().length != 0 && $("#userPhone").val().length != 0 && $("#dateBirth").val().length != 0) {
      $(".input-submit").removeClass("button--disabled");
    }
  });
  $("#userPhone").keyup(function () {
    if ($(this).val().length != 0 && $("#userName").val().length != 0 && $("#dateBirth").val().length != 0) {
      $(".input-submit").removeClass("button--disabled");
    }
  });
  $("#dateBirth").keyup(function () {
    if ($(this).val().length != 0 && $("#userName").val().length != 0 && $("#userPhone").val().length != 0) {
      $(".input-submit").removeClass("button--disabled");
    }
  });
});
var buttonSubmit = document.getElementById("applyformSubmit");
buttonSubmit.addEventListener("click", function (event) {
  if (hasNumber(document.getElementById("userName").value)) {
    document.getElementById("userName").classList.add("input-warning");
    buttonSubmit.classList.add("button--disabled");
    event.preventDefault();
  } else {
    window.location.href = "http://localhost:3000/ThankYou.html";
  }
});
document.getElementById("formApply").addEventListener("submit", function (event) {
  buttonSubmit.removeEventListener("click");
  window.location.href = "http://localhost:3000/ThankYou.html";
});

function hasNumber(myString) {
  return /\d/.test(myString);
} // // header-swiper
// var swiper = new Swiper('#main-swiper', {
//   fadeEffect: {
//     crossFade: true
//   },
//   navigation: {
//     nextEl: '.swiper-button-next--header',
//     prevEl: '.swiper-button-prev--header',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },
//   loop: true,
//   // autoplay: {
//   //   delay: 2300,
//   // },
//   fadeEffect: {
//     crossFade: true
//   },
//   speed: 800,
//   watchSlidesProgress: true,
//   watchVisibility: true,
//   disableOnInteraction: true,
// });