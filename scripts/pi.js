
const Obj1 = document.querySelectorAll(".animate-pt1");
const Obj2 = document.querySelectorAll(".animate-pt2");
const Obj3 = document.querySelectorAll(".animate-pt3");
const Obj4 = document.querySelectorAll(".animate-pt4");
const Interval = 300;
let yIndex = 2.5;
let done_obj1 = false;
let done_obj2 = false;
let done_obj3 = false;
let done_obj4 = false;

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
$(".introduction-to-pi").click(function(){
    $(".show-more-1").toggle(500);
    $(".history-of-pi").delay(2000).slideDown(500);
})

    const ShowMore2 = document.querySelectorAll(".show-more-2");

$(".history-of-pi").click(function(){
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
    $(".introduction-to-pi").slideUp(500);
    $(".show-more-1").slideUp(500);
    $(".show-more-2").toggle(500);
    $(".fun-facts-pi").delay(5000).slideDown(500, () => {
        if(!done_obj3){
            Obj3.forEach(function(element, index){ 
                setTimeout(function () {
                    yIndex = yIndex + 2.5;
                    console.log(element);
                    $(element).css(
                        "opacity","1"
                    )
    
                    $(element).css(
                        "transform",`translateY(${yIndex}px)`
                    );
    
                }, index * Interval);
            })
        }
        done_obj3 = true;
    })
    
})
$(".fun-facts-pi").click(function(){
    if(!done_obj4){
        Obj4.forEach(function(element, index){ 
            setTimeout(function () {
                yIndex = yIndex + 2.5;
                console.log(element);
                $(element).css(
                    "opacity","1"
                )

                $(element).css(
                    "transform",`translateY(${yIndex}px)`
                );

            }, index * Interval);
        })
    }
    done_obj4 = true;
    $(".history-of-pi").slideUp(500);
    $(".show-more-2").slideUp(500);
    $(".fun-facts-pi").slideUp(500);
})
