/**
 * Created by kenmiyachi on 11/3/16.
 */
'use strict';


$(document).ready(function() {
    initializePage();
});

function initializePage() {
    console.log("Javascript connected!");
    choose();
}

function choose() {
    var customer = $("#customer").val();
    var retailer = $("#retailer").val();
    console.log(customer);
    console.log(retailer);

}

$('#customer').click(function (e) {
    console.log("CUSTOMER");
}

$('#retailer').click(function (e) {
    console.log("RETAILER");
}