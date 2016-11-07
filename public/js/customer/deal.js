/**
 * Created by quiquemz on 11/3/16.
 */
'use strict';
var today=new Date();

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    populateSelect();
    storeValues();
}

function populateSelect() {
    for(var i = 1; i <= 100; i++) {
        $("#quantity-box").append($('<option>', {
            value: i,
            text: i
        }));
    }
}

function storeValues() {
    var e = document.getElementById("quantity-box");
    var value = e.options[e.selectedIndex].value;
    setCookie("field1", value);
    setCookie("field2", "$3.00/loaf");
    return true;
}

function setCookie(name,value) {
    var expiry = new Date(today.getTime()+30*24*3600*1000);
    document.cookie = name+"="+escape(value)+"; path=/; expires="+expiry.toGMTString();
}

function getCookie(name) {
    var re=new RegExp(name+"=([^;]+)");
    var value=re.exec(document.cookie);
    return(value!=null)?unescape(value[1]):null;
}

function deleteCookie(name) {
    var expired=new Date(today.getTime()-24*3600*1000);
    document.cookie=name+"=null; path=/; expires="+expired.toGMTString();
}