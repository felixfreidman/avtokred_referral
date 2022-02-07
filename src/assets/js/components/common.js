$("#userPhone").inputmask();

const userNameInput = document.getElementById("userName");
const userPhoneInput = document.getElementById("userPhone");
$(document).ready(function() {
    $(".input-submit").addClass("button--disabled");
    $("#userName").keyup(function() {
        if (
            $(this).val().length != 0 &&
            $("#userPhone").val().length != 0 &&
            $("#dateBirth").val().length != 0
        ) {
            $(".input-submit").removeClass("button--disabled");
        }
    });
    $("#userPhone").keyup(function() {
        if (
            $(this).val().length != 0 &&
            $("#userName").val().length != 0 &&
            $("#dateBirth").val().length != 0
        ) {
            $(".input-submit").removeClass("button--disabled");
        }
    });
    $("#dateBirth").keyup(function() {
        if (
            $(this).val().length != 0 &&
            $("#userName").val().length != 0 &&
            $("#userPhone").val().length != 0
        ) {
            $(".input-submit").removeClass("button--disabled");
        }
    });
});

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