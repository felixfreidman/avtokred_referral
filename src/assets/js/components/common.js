function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
$("#userPhone").inputmask();
let swiperGreet = new Swiper("#formSwiper", {
    navigation: {
        nextEl: ".swiper-pagination-btn--next",
        prevEl: ".swiper-pagination-btn--prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: false,
    effect: "cube",
    speed: 300,
    watchSlidesProgress: true,
    watchVisibility: true,
    disableOnInteraction: true,
    noSwiping: true,
});
swiperGreet.allowTouchMove = false;
$(document).ready(function() {
    // $("#formSliderDebt").slider({
    //     range: "min",
    //     animate: true,
    //     value: 500000,
    //     min: 100000,
    //     max: 4350000,
    //     step: 1000,
    //     slide: function(event, ui) {
    //         let debtValue = ui.value;
    //         debtValue = numberWithCommas(debtValue);
    //         $("#debtInput").val(debtValue);
    //     },
    // });
    $("#sliderDebt").slider({
        range: "min",
        animate: true,
        value: 400000,
        min: 100000,
        max: 8000000,
        slide: function(event, ui) {
            let debtValue = ui.value;
            debtValue = numberWithCommas(debtValue);
            $("#sliderDebtInput").val(debtValue + " ₽");
        },
        // slide: function(event, ui) {
        //     let debtMoney = $("#sliderDebt").slider("value");
        //     let debtDeposit = $("#sliderDeposit").slider("value");
        //     const debtTimeRadios = document.querySelectorAll(".controller-input");
        //     let objectDebtTime = [...debtTimeRadios].filter((radio) => {
        //         if (radio.checked) {
        //             return radio;
        //         }
        //     });
        //     let debtTime = objectDebtTime[0].id;
        //     let updatedDebtTime = debtTime.replace("month", "");
        //     switch (updatedDebtTime) {
        //         case "05":
        //             updatedDebtTime = 0.5;
        //             break;
        //     }
        //     let coeficient = 3.9 / 1200.0;
        //     updatedDebtTime = parseInt(updatedDebtTime);
        //     debtMoney = parseInt(debtMoney);
        //     debtDeposit = parseInt(debtDeposit);
        //     debtMoney -= debtDeposit;
        //     let monthPayment =
        //         debtMoney *
        //         coeficient *
        //         Math.floor(
        //             Math.pow(1 + coeficient, updatedDebtTime) /
        //             (Math.pow(1 + coeficient, updatedDebtTime) - 1)
        //         );
        //     $;
        //     $("#depositHalf").text(Math.floor((debtMoney * 0.8) / 2));
        //     $("#depositMax").text(Math.floor(debtMoney * 0.8));
        //     let updatedMaxValue = parseInt($("#depositMax").text());
        //     $("#sliderDeposit").slider("option", "max", updatedMaxValue);
        //     $("#interestResult").text(Math.floor(monthPayment) + " ₽");
        // },
    });
    $("#sliderYear").slider({
        range: "min",
        animate: true,
        value: 3,
        min: 0,
        max: 8,
        slide: function(event, ui) {
            let debtValue = ui.value;
            debtValue = numberWithCommas(debtValue);
            $("#sliderYearInput").val(debtValue);
            updateDatesOfInput();
        },
    });
    $("#sliderInvest").slider({
        range: "min",
        animate: true,
        value: 0,
        min: 0,
        max: $("#sliderDebt").slider("option", "value") * 0.8,
        slide: function(event, ui) {
            let debtValue = ui.value;
            debtValue = numberWithCommas(debtValue);
            $("#sliderInvestInput").val(debtValue + " ₽");
            let debtValueMax = $("#sliderDebt").slider("option", "value") * 0.8;
            console.log(debtValueMax);
            $("#sliderInvest").slider("option", "max", debtValueMax);
        },
    });
    $("#sliderDebtUncertain").slider({
        range: "min",
        animate: true,
        value: 400000,
        min: 100000,
        max: 8000000,
        slide: function(event, ui) {
            let debtValue = ui.value;
            debtValue = numberWithCommas(debtValue);
            $("#sliderDebtUncertainInput").val(debtValue + " ₽");
        },
    });
    $("#sliderYearUncertain").slider({
        range: "min",
        animate: true,
        value: 3,
        min: 0,
        max: 8,
        slide: function(event, ui) {
            let debtValue = ui.value;
            debtValue = numberWithCommas(debtValue);
            $("#sliderYearInput").val(debtValue);
            updateDatesOfInput();
        },
    });

    // $("#sliderDeposit").slider({
    //     range: "min",
    //     animate: true,
    //     value: 40000,
    //     min: 0,
    //     max: 80000,
    //     slide: function(event, ui) {
    //         let debtMoney = $("#sliderDebt").slider("value");
    //         let debtDeposit = $("#sliderDeposit").slider("value");
    //         const debtTimeRadios = document.querySelectorAll(".controller-input");
    //         let objectDebtTime = [...debtTimeRadios].filter((radio) => {
    //             if (radio.checked) {
    //                 return radio;
    //             }
    //         });
    //         let debtTime = objectDebtTime[0].id;
    //         let updatedDebtTime = debtTime.replace("month", "");
    //         switch (updatedDebtTime) {
    //             case "05":
    //                 updatedDebtTime = 0.5;
    //                 break;
    //         }
    //         let coeficient = 3.9 / 1200.0;
    //         updatedDebtTime = parseInt(updatedDebtTime);
    //         debtMoney = parseInt(debtMoney);
    //         debtDeposit = parseInt(debtDeposit);
    //         debtMoney -= debtDeposit;
    //         let monthPayment = Math.floor(
    //             debtMoney *
    //             coeficient *
    //             (Math.pow(1 + coeficient, updatedDebtTime) /
    //                 (Math.pow(1 + coeficient, updatedDebtTime) - 1))
    //         );

    //         $("#interestResult").text(Math.floor(monthPayment) + " ₽");
    //         // var k = 3.9 / 1200.0;
    //         // sum = price * k * (Math.pow(1 + k, srok) / (Math.pow(1 + k, srok) - 1));
    //     },
    // });
    // $("#debtInput").val($("#sliderDebt").slider("option", "value"));
    // $("#debtInput").change(function() {
    //     $("#formSliderDebt").slider("value", $(this).val());
    // });
    // $("#formSliderTime").slider({
    //     range: "min",
    //     animate: true,
    //     value: 3,
    //     min: 1,
    //     max: 8,
    //     step: 1,
    //     slide: function(event, ui) {
    //         let timeValue = ui.value;
    //         switch (timeValue) {
    //             case 1:
    //                 timeValue = `${timeValue} год`;
    //                 break;
    //             case 2:
    //                 timeValue = `${timeValue} года`;
    //                 break;
    //             case 3:
    //                 timeValue = `${timeValue} года`;
    //                 break;
    //             case 4:
    //                 timeValue = `${timeValue} года`;
    //                 break;
    //             default:
    //                 timeValue = `${timeValue} лет`;
    //         }
    //         $("#timeInput").val(timeValue);
    //     },
    // });
    // $("#timeInput").val($("#formSliderTime").slider("option", "value"));
    // let timeValue = $("#timeInput").val();
    // switch (timeValue) {
    //     default: timeValue = `${timeValue} года`;
    // }
    // $("#timeInput").val(timeValue);
    // $("#timeInput").change(function() {
    //     $("#formSliderTime").slider("value", $(this).val());
    // });
    // $("#formSliderInvest").slider({
    //     range: "min",
    //     animate: true,
    //     value: 30000,
    //     min: 10000,
    //     max: 500000,
    //     step: 5000,
    //     slide: function(event, ui) {
    //         let debtValue = ui.value;
    //         debtValue = numberWithCommas(debtValue);
    //         $("#incomeInput").val(debtValue);
    //     },
    // });
    // $("#incomeInput").val($("#formSliderInvest").slider("option", "value"));
    // $("#incomeInput").change(function() {
    //     $("#formSliderInvest").slider("value", $(this).val());
    // });
    // $("#formSliderInvest").slider({
    //     range: "min",
    //     animate: true,
    //     value: 100000,
    //     min: 0,
    //     max: 400000,
    //     step: 1000,
    //     slide: function(event, ui) {
    //         let debtValue = ui.value;
    //         debtValue = numberWithCommas(debtValue);
    //         $("#investInput").val(debtValue);
    //     },
    // });
    // $("#investInput").val($("#formSliderInvest").slider("option", "value"));
    // $("#investInput").change(function() {
    //     $("#formSliderInvest").slider("value", $(this).val());
    // });
});

function updateDatesOfInput() {
    let yearInput = document.getElementById("sliderYearInput");
    let updatedYear = yearInput.value;
    updatedYear = updatedYear.replace(" года", "");
    switch (updatedYear) {
        case "0":
            yearInput.value = "6 месяцев";
            break;

        case "1":
            yearInput.value = "1 год";
            break;

        case "2":
            yearInput.value = "2 года";
            break;

        case "3":
            yearInput.value = "3 года";
            break;

        case "4":
            yearInput.value = "4 года";
            break;

        default:
            yearInput.value = `${yearInput.value} лет`;
            break;
    }
}
const userNameInput = document.getElementById("userName");
const userPhoneInput = document.getElementById("userPhone");
$(document).ready(function() {
    $(".form-layout__submit").addClass("button--disabled");
    $("#userName").keyup(function() {
        if ($(this).val().length != 0 && $("#userPhone").val().length != 0) {
            $(".form-layout__submit").removeClass("button--disabled");
        }
    });
    $("#userPhone").keyup(function() {
        if ($(this).val().length != 0 && $("#userName").val().length != 0) {
            $(".form-layout__submit").removeClass("button--disabled");
        }
    });
});

// $(document).ready(function() {
//     $("#formApply").submit(function() {
//         if (!hasNumber($("#userName").val())) {
//             $("#userName").addClass("input-warning");
//             $(".form-layout__submit").addClass("button--disabled");
//             console.log("Added");
//         }
//     });
// });

let buttonSubmit = document.getElementById("applyformSubmit");
buttonSubmit.addEventListener("click", (event) => {
    if (hasNumber(document.getElementById("userName").value)) {
        document.getElementById("userName").classList.add("input-warning");
        buttonSubmit.classList.add("button--disabled");
        event.preventDefault();
    } else {
        window.location.href = "http://localhost:3000/ThankYou.html";
    }
});

document.getElementById("formApply").addEventListener("submit", (event) => {
    buttonSubmit.removeEventListener("click");
    window.location.href = "http://localhost:3000/ThankYou.html";
});

function hasNumber(myString) {
    return /\d/.test(myString);
}
// JQUERY TOUCH PATCH
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function($) {
    // Detect touch support
    $.support.touch = "ontouchend" in document;

    // Ignore browsers without touch support
    if (!$.support.touch) {
        return;
    }

    var mouseProto = $.ui.mouse.prototype,
        _mouseInit = mouseProto._mouseInit,
        _mouseDestroy = mouseProto._mouseDestroy,
        touchHandled;

    /**
     * Simulate a mouse event based on a corresponding touch event
     * @param {Object} event A touch event
     * @param {String} simulatedType The corresponding mouse event
     */
    function simulateMouseEvent(event, simulatedType) {
        // Ignore multi-touch events
        if (event.originalEvent.touches.length > 1) {
            return;
        }

        event.preventDefault();

        var touch = event.originalEvent.changedTouches[0],
            simulatedEvent = document.createEvent("MouseEvents");

        // Initialize the simulated mouse event using the touch event's coordinates
        simulatedEvent.initMouseEvent(
            simulatedType, // type
            true, // bubbles
            true, // cancelable
            window, // view
            1, // detail
            touch.screenX, // screenX
            touch.screenY, // screenY
            touch.clientX, // clientX
            touch.clientY, // clientY
            false, // ctrlKey
            false, // altKey
            false, // shiftKey
            false, // metaKey
            0, // button
            null // relatedTarget
        );

        // Dispatch the simulated event to the target element
        event.target.dispatchEvent(simulatedEvent);
    }

    /**
     * Handle the jQuery UI widget's touchstart events
     * @param {Object} event The widget element's touchstart event
     */
    mouseProto._touchStart = function(event) {
        var self = this;

        // Ignore the event if another widget is already being handled
        if (
            touchHandled ||
            !self._mouseCapture(event.originalEvent.changedTouches[0])
        ) {
            return;
        }

        // Set the flag to prevent other widgets from inheriting the touch event
        touchHandled = true;

        // Track movement to determine if interaction was a click
        self._touchMoved = false;

        // Simulate the mouseover event
        simulateMouseEvent(event, "mouseover");

        // Simulate the mousemove event
        simulateMouseEvent(event, "mousemove");

        // Simulate the mousedown event
        simulateMouseEvent(event, "mousedown");
    };

    /**
     * Handle the jQuery UI widget's touchmove events
     * @param {Object} event The document's touchmove event
     */
    mouseProto._touchMove = function(event) {
        // Ignore event if not handled
        if (!touchHandled) {
            return;
        }

        // Interaction was not a click
        this._touchMoved = true;

        // Simulate the mousemove event
        simulateMouseEvent(event, "mousemove");
    };

    /**
     * Handle the jQuery UI widget's touchend events
     * @param {Object} event The document's touchend event
     */
    mouseProto._touchEnd = function(event) {
        // Ignore event if not handled
        if (!touchHandled) {
            return;
        }

        // Simulate the mouseup event
        simulateMouseEvent(event, "mouseup");

        // Simulate the mouseout event
        simulateMouseEvent(event, "mouseout");

        // If the touch interaction did not move, it should trigger a click
        if (!this._touchMoved) {
            // Simulate the click event
            simulateMouseEvent(event, "click");
        }

        // Unset the flag to allow other widgets to inherit the touch event
        touchHandled = false;
    };

    /**
     * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
     * This method extends the widget with bound touch event handlers that
     * translate touch events to mouse events and pass them to the widget's
     * original mouse event handling methods.
     */
    mouseProto._mouseInit = function() {
        var self = this;

        // Delegate the touch handlers to the widget's element
        self.element.bind({
            touchstart: $.proxy(self, "_touchStart"),
            touchmove: $.proxy(self, "_touchMove"),
            touchend: $.proxy(self, "_touchEnd"),
        });

        // Call the original $.ui.mouse init method
        _mouseInit.call(self);
    };

    /**
     * Remove the touch event handlers
     */
    mouseProto._mouseDestroy = function() {
        var self = this;

        // Delegate the touch handlers to the widget's element
        self.element.unbind({
            touchstart: $.proxy(self, "_touchStart"),
            touchmove: $.proxy(self, "_touchMove"),
            touchend: $.proxy(self, "_touchEnd"),
        });

        // Call the original $.ui.mouse destroy method
        _mouseDestroy.call(self);
    };
})(jQuery);