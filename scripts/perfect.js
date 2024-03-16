let currentSlide = 0;

$(document).ready(() =>{
    currentSlide = 1
    $(".info1").delay(1000).slideDown(500);
    $(".info-perfect1").click(function () {
        $(".show-more1").slideDown(750);
        UpdateTitle("ogólne informacje");
    })
    $(".arrow-slider-left").delay(750).show(500);
    $(".arrow-slider-right").delay(750).show(500);
})

$(".info-perfect2").click(function () {
    $(".show-more2").slideDown(750);
    
})
        $("#show-more225").click(function () {
            $(".show-more25").slideDown(750);
        })

$(".info-perfect3").click(function () {
        $(".show-more3").slideDown(750).css(
            "display", "flex"
        );
            
})
$(".info-perfect4").click(function (){
    $(".show-more4").slideDown(750);
})
$(".info-perfect5").click(function (){
    $(".show-more5").slideDown(750);
})
    $("#show-more525").click(function () {
        $(".show-more55").slideDown(750);
    })

$(".arrow-slider-right").click(function() {
    if(currentSlide == 1){
        $(".info1").slideUp(500);
        $(".info2").delay(500).slideDown(500);
        currentSlide = 2;
        UpdateTitle("ogólne informacje");
    }
    else if(currentSlide == 2){
        $(".info2").slideUp(500);
        $(".info3").delay(500).slideDown(500);
        currentSlide = 3;
        UpdateTitle("graficzne przedstawienie");
    }
    else if(currentSlide == 3){
        $(".info3").slideUp(500);
        $(".info4").delay(500).slideDown(500);
        currentSlide = 4;
        UpdateTitle("jako liczby parzyste");
    }
    else if(currentSlide == 4){
        $(".info4").slideUp(500);
        $(".info5").delay(500).slideDown(500);
        currentSlide = 5;
        UpdateTitle("przykłady");
    }
})
$(".arrow-slider-left").click(function (){
    if(currentSlide == 2){
        $(".info2").slideUp(500);
        $(".info1").delay(500).slideDown(500);
        currentSlide = 1;
        UpdateTitle("ogólne informacje");
    }
    else if(currentSlide == 3){
        $(".info3").slideUp(500);
        $(".info2").delay(500).slideDown(500);
        currentSlide = 2;
        UpdateTitle("ogólne informacje");
    }
    else if(currentSlide == 4){
        $(".info4").slideUp(500);
        $(".info3").delay(500).slideDown(500);
        currentSlide = 3;
        UpdateTitle("graficzne przedstawienie");
    }
    else if(currentSlide == 5){
        $(".info5").slideUp(500);
        $(".info4").delay(500).slideDown(500);
        currentSlide = 4;
        UpdateTitle("jako liczby parzyste");
    }
})

function UpdateTitle(newTitle){
    $(document).attr("title", "Liczba PI - " + newTitle);
}
