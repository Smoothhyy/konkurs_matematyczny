
const Obj1 = document.querySelectorAll(".animate-pt1");
const Obj2 = document.querySelectorAll(".animate-pt2");
const Interval = 300;
let yIndex = 2.5;
let done_obj1 = false;
let done_obj2 = false;

$(document).ready(function(){   
    if(!done_obj1){
            Obj1.forEach(function(element, index){
                
            setTimeout(function () {
                yIndex = yIndex + 2.5;
                console.log(element);
                $(element).css(
                    "opacity","1"
                );

                $(element).css(
                    "transform",`translateY(${yIndex}px)`
                );

            }, index * Interval);
        })
    }
   
    done_obj1 = true;
})
//Lepiej dawać logikę poza .ready w funkcjach 
$(".introduction").click(function(){
    $(".show-more-1").toggle(500);
    $(".history-of-pi").delay(2500).slideDown(500);
})

$(".history-of-pi").click(function(){
    $(".introduction").slideUp(500);
    $(".show-more-1").slideUp(500);
    $(".show-more-2").toggle(500);

    if(!done_obj2){
        Obj2.forEach(function(element, index){ 

            setTimeout(function () {

                yIndex = yIndex + 2.5;
                console.log(element);
                $(element).css(
                    "opacity","1"
                );

                $(element).css(
                    "transform",`translateY(${yIndex}px)`
                );

            }, index * Interval);
        })
    }
    done_obj2 = true;
})
