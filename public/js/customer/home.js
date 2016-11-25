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
    clickOffer();
    sortByActiveTab();
    setActiveTab();
    clickFeature();
}

function clickOffer() {
    $(".deal").on('click', function (e) {
        e.preventDefault();

        var companyName = $(this).find(".company-name").text() || $(this).find(".please").text();
        var companyOffer = $(this).find(".company-offer").html() || $(this).find(".work").html();
        location.href = "/customer/deal?name=" + companyName + "&offer=" + companyOffer;
        ga('send', 'event', 'feat', 'yes');
    });
}


function clickFeature() {
    $(".feat").on('click',function(e) {
        var companyName = $(this).find(".please").text();
        var companyOffer = $(this).find(".work").html();
        location.href = "/customer/deal?name=" + companyName + "&offer=" + companyOffer;
        console.log("FUCK");
    });
}
function sortByActiveTab() {
    $("li.active > a.sort").click();
}

function setActiveTab() {
    $('a.sort').on('click', function (e) {
        e.preventDefault();
        $("li.active").removeClass("active");
        $(this).parent().addClass("active");
    });


}