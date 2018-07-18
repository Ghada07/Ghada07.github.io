// resposive top navbar
function myFunction(){
    $('.tog').click(function(){
        $('.nanbar').toggle();
    });  
}

//Initialize the slider
    
    $(document).ready(function () {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions : true,
            auto : true,
            speed : 400
        }); 
    });
// add and remove class (active)
    $('li').click(function () {
        $('li.active').removeClass('active');
        $(this).closest('li').addClass('active');
    });


// trigger mixit up
var mixer = mixitup('#container');

// nicescroll
$("body").niceScroll({
	cursorcolor : "#f4cc4b",
});

// scroll
//$(document).scroll(function(){
	//$('nav').css('background-color','#333');
//});

// Html animate
    $('nav li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 2000);
        console.log($(this).data('value'));
    });

// up button
     // When the user scrolls down 20px from the top of the document, show the button
    var myBtn = document.getElementById('btn');
    
    window.onscroll = function scrollFunction() {
        
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            myBtn.style.display = "block";
        } else {
            myBtn.style.display = "none";
        }
    };
    // When the user clicks on the button, scroll to the top of the document
    myBtn.onclick = function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        $('li a').removeClass('active');
        $('li a').first().addClass('active');
    };