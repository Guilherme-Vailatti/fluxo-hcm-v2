$(document).ready(function () {
    console.log('funfa!')
    $('.overlay,.modal_item_header_close').click(function () {
        $('.overlay').fadeOut();
        $('.modal').fadeOut();
        $('.modal_item').slideUp();
        return false;
    });


$('.item, .item-mobile ').click(function () {
console.log('funciona')
    $('.overlay').fadeIn();
    $('.modal').fadeIn();
    $('.modal_item:eq(' + $(this).index() + ')').slideDown();
    return false;
});

$('#icon-hcm').click(function (event) {
    event.preventDefault();
    $('.background').css('opacity', 0);
    $('.background-hcm').css('display', 'block');
    setTimeout(function(){
        $('.background-hcm').css('opacity', 1);
        $('.info-box-1').fadeIn();
        $('.info-box-2').fadeOut();
        $('.info-box-3').fadeOut();
    }, 50); 
    return false;
});

$('#icon-painel').click(function (event) {
    event.preventDefault();
    $('.background-hcm').css('opacity', 0);
    setTimeout(function(){
        $('.background-hcm').css('display', 'block');
        $('.background').css('opacity', 1);
        $('.info-box-2').fadeIn();
        $('.info-box-1').fadeOut();
        $('.info-box-3').fadeOut();
    }, 50); 
    return false;
});

$('#icon-xt').click(function (event) {
    event.preventDefault();
    $('.info-box-3').fadeIn();
    $('.info-box-1').fadeOut();
    $('.info-box-2').fadeOut();
    return false;
});

$('.close-info-box').click(function (event) {
    event.preventDefault();
    $(this).parent().hide();
    return false;
});

});

