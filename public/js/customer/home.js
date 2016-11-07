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
    listenToClickEvent();
}

function listenToClickEvent() {
    $(".deal").on('click', function (e) {
        e.preventDefault();

        var retailer = $(this).find("h2").text();
        location.href = "/customer/deal?name=" + retailer;
    });
}