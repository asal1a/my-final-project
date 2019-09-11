console.log(`lod`)


$(function() {
    $('#p').slideUp(3000).slideDown(3000);
});
$('#pic1').click(function() {
    $('#pic2').hide();
    $('#pic3').hide();
    $('#pic4').hide();
    $('#pic5').hide();
    $('#pic6').hide();
    $('#pic7').hide();
    $('#pic8').hide();
    $('#btn1').show();

});


$('#pic2').click(function() {
    console.log('pic 2 mouseover')
    $('#pic1').hide();
    $('#pic3').hide();
    $('#pic4').hide();
    $('#pic5').hide();
    $('#pic6').hide();
    $('#pic7').hide();
    $('#pic8').hide();
    $('#btn2').show();

});
$('#pic3').click(function() {
    $('#pic1').hide();
    $('#pic2').hide();
    $('#pic4').hide();
    $('#pic5').hide();
    $('#pic6').hide();
    $('#pic7').hide();
    $('#pic8').hide();
    $('#btn3').show();

});
$('#pic4').click(function() {
    $('#pic1').hide();
    $('#pic2').hide();
    $('#pic3').hide();
    $('#pic5').hide();
    $('#pic6').hide();
    $('#pic7').hide();
    $('#pic8').hide();
    $('#btn4').show();

});
$('#pic5').click(function() {
    $('#pic1').hide();
    $('#pic2').hide();
    $('#pic4').hide();
    $('#pic3').hide();
    $('#pic6').hide();
    $('#pic7').hide();
    $('#pic8').hide();
    $('#btn5').show();

});
$('#pic6').click(function() {
    $('#pic1').hide();
    $('#pic2').hide();
    $('#pic3').hide();
    $('#pic4').hide();
    $('#pic5').hide();
    $('#pic7').hide();
    $('#pic8').hide();
    $('#btn6').show();

});
$('#pic7').click(function() {
    $('#pic1').hide();
    $('#pic2').hide();
    $('#pic4').hide();
    $('#pic5').hide();
    $('#pic6').hide();
    $('#pic3').hide();
    $('#pic8').hide();
    $('#btn7').show();

});
$('#pic8').click(function() {
    $('#pic1').hide();
    $('#pic2').hide();
    $('#pic4').hide();
    $('#pic5').hide();
    $('#pic6').hide();
    $('#pic7').hide();
    $('#pic3').hide();
    $('#btn8').show();

});
$("#tw").wrap($('<a>', {
    href: 'https://twitter.com/modnah_zhr'
}));