$(document).ready(function () {
    
    $('.su').click(function () {
        var clicked = $(this);
        clicked.attr('disabled', 'disabled');
        var name = clicked.attr('data-name');
        var url = '/Restorans/OneResto?name='+name; 
        // $.get(url);
    });
});
