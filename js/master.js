/* 
    In every $('#content')....html('<img id="image01large" src="../img/image.png" />') replace image.png for your image.
*/

$(document).ready(function() {
   $('#image01th').bind({
       click: function() {
           $('#content').fadeOut(600, function(){
           $('#content').fadeIn(700).html('<img id="image01large" src="../img/image01.jpg" />');
           });
       },
       mouseenter: function() {
           $(this).addClass('focuson'); 
       },
       mouseleave: function() {
           $(this).removeClass('focuson'); 
       },
});

    $('#image02th').bind({
       click: function() {
           $('#content').fadeOut(600, function(){
           $('#content').fadeIn(700).html('<img id="image02large" src="../img/image02.jpg" />');
           });
       },
       mouseenter: function() {
           $(this).addClass('focuson'); 
       },
       mouseleave: function() {
           $(this).removeClass('focuson'); 
       },
});
   $('#image03th').bind({
       click: function() {
           $('#content').fadeOut(600, function(){
           $('#content').fadeIn(700).html('<img id="image03large" src="../img/image03.jpg" />');
           });
       },
       mouseenter: function() {
           $(this).addClass('focuson'); 
       },
       mouseleave: function() {
           $(this).removeClass('focuson'); 
       },
});

    $('#image04th').bind({
       click: function() {
           $('#content').fadeOut(600, function(){
           $('#content').fadeIn(700).html('<img id="image04large" src="../img/image04.jpg" />');
           });
       },
       mouseenter: function() {
           $(this).addClass('focuson'); 
       },
       mouseleave: function() {
           $(this).removeClass('focuson'); 
       },
});

$('#image05th').bind({
       click: function() {
           $('#content').fadeOut(600, function(){
           $('#content').fadeIn(700).html('<img id="image05large" src="../img/image05.jpg" />');
           });
       },
       mouseenter: function() {
           $(this).addClass('focuson'); 
       },
       mouseleave: function() {
           $(this).removeClass('focuson'); 
       },
});

    $('#image06th').bind({
       click: function() {
           $('#content').fadeOut(600, function(){
           $('#content').fadeIn(700).html('<img id="image06large" src="../img/image06.jpg" />');
           });
       },
       mouseenter: function() {
           $(this).addClass('focuson'); 
       },
       mouseleave: function() {
           $(this).removeClass('focuson'); 
       },
});
   $('#image07th').bind({
       click: function() {
           $('#content').fadeOut(600, function(){
           $('#content').fadeIn(700).html('<img id="image07large" src="../img/image07.jpg" />');
           });
       },
       mouseenter: function() {
           $(this).addClass('focuson'); 
       },
       mouseleave: function() {
           $(this).removeClass('focuson'); 
       },
});

    $('#image08th').bind({
       click: function() {
           $('#content').fadeOut(600, function(){
           $('#content').fadeIn(700).html('<img id="image08large" src="../img/image08.jpg" />');
           });
       },
       mouseenter: function() {
           $(this).addClass('focuson'); 
       },
       mouseleave: function() {
           $(this).removeClass('focuson'); 
       },
});

    $('#image09th').bind({
       click: function() {
           $('#content').fadeOut(600, function(){
           $('#content').fadeIn(700).html('<img id="image09large" src="../img/image09.jpg" />');
           });
       },
       mouseenter: function() {
           $(this).addClass('focuson'); 
       },
       mouseleave: function() {
           $(this).removeClass('focuson'); 
       },
});
});
