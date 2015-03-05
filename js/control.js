

$(document).ready(function(){
    
});


function showPopup(pfName) {
    $(".popup_container .popup .pf").hide();
    $(".popup_container").show();
    $(".popup_container .popup ." + pfName).show();
}

function hidePopup() {
    $(".popup_container").hide();
}