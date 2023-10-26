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
    }, 50); 
    return false;
});

$('#icon-painel').click(function (event) {
    event.preventDefault();
    $('.background-hcm').css('opacity', 0);
    setTimeout(function(){
        $('.background-hcm').css('display', 'block');
        $('.background').css('opacity', 1);
    }, 50); // Adicionamos um atraso maior para garantir a transição suave
    return false;
});
});


