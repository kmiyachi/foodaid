/**
 * Created by kenmiyachi on 11/10/16.
 */
/**
 * Created by quiquemz on 11/3/16.
 */
'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    radio();
}

function radio() {
    var allRadios = document.getElementsByName('radio');
    var booRadio;
    var x = 0;
    for (x = 0; x < allRadios.length; x++) {

        allRadios[x].onclick = function () {
            if (booRadio == this) {
                this.checked = false;
                booRadio = null;
            } else {
                booRadio = this;
            }
        };
    }
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function postdata() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("password_confirm").value;
    var location = document.getElementById("location").value;
    var radios = document.getElementsByName('radio');
    var type;
    if (radios[0].checked) {
        type = "customer";
    }
    else {
        type = "retailer";
    }

}