
const Obj1 = document.querySelectorAll(".animate-pt1");
const Obj2 = document.querySelectorAll(".animate-pt2");
const Obj3 = document.querySelectorAll(".animate-pt3");
const Obj4 = document.querySelectorAll(".animate-pt4");
const Obj5 = document.querySelectorAll(".animate-pt5");
const Obj6 = document.querySelectorAll(".animate-pt6");
const Obj7 = document.querySelectorAll(".animate-pt7");
let interval = 300;
let yIndex = 2.5;
let done_obj1 = false;
let done_obj2 = false;
let done_obj3 = false;
let done_obj4 = false;
let done_obj5 = false;
let done_obj6 = false;
let done_obj7 = false;

$(document).ready(function(){   
    if(!done_obj1){
            Obj1.forEach(function(element, index){
                
            setTimeout(function () {
                yIndex = yIndex + 2.5
                console.log(element);
                $(element).css(
                    "opacity","1"
                );

                $(element).css(
                    "transform",`translateY(${yIndex}px)`
                );

            }, index * interval);
        })
    }
   
    done_obj1 = true;
})
//Lepiej dawać logikę poza .ready w funkcjach 
$(".introduction-to-pi").click(function(){
    $(".show-more-1").toggle(500);
    $(".history-of-pi").delay(2000).slideDown(500);
    UpdateTitle("wprowadzenie");
})

    const ShowMore2 = document.querySelectorAll(".show-more-2");

$(".history-of-pi").click(function(){
    if(!done_obj2){
        Obj2.forEach(function(element, index){ 
            setTimeout(function () {
                yIndex = yIndex + 2.5
                console.log(element);
                $(element).css(
                    "opacity","1"
                );
                $(element).css(
                    "transform",`translateY(${yIndex}px)`
                );
            }, index * interval);
        })
    }
    done_obj2 = true;
    $(".introduction-to-pi").slideUp(500);
    $(".show-more-1").slideUp(500);
    $(".show-more-2").toggle(500);
    $(".fun-facts-pi-arrow").delay(5000).slideDown(500, () => {
        if(!done_obj3){
            Obj3.forEach(function(element, index){ 
                setTimeout(function () {
                    yIndex = yIndex + 2.5
                    console.log(element);
                    $(element).css(
                        "opacity","1"
                    )
    
                    $(element).css(
                        "transform",`translateY(${yIndex}px)`
                    );
    
                }, index * interval);
            })
        }
        done_obj3 = true;
    })
    UpdateTitle("historia");
})
$(".fun-facts-pi-arrow").click(function(){
    if(!done_obj4){
        Obj4.forEach(function(element, index){ 
            setTimeout(function () {
                yIndex = yIndex + 2.5
                console.log(element);
                $(element).css(
                    "opacity","1"
                )

                $(element).css(
                    "transform",`translateY(${yIndex}px)`
                );

            }, index * interval);
        })
    }
    done_obj4 = true;
    $(".history-of-pi").slideUp(500);
    $(".show-more-2").slideUp(500);
    $(".fun-facts-pi-arrow").slideUp(500);
    $(".fun-facts-pi").delay(500).slideDown(500);

$(".fun-facts-pi").click(function(){
    if(!done_obj5){
        Obj5.forEach(function(element, index){ 
            setTimeout(function () {
                yIndex = yIndex + 2.5
                console.log(element);
                $(element).css(
                    "opacity","1"
                )

                $(element).css(
                    "transform",`translateY(${yIndex}px)`
                );

            }, index * interval);
        })
    }
    done_obj5 = true;

    UpdateTitle("ciekawostki");
    $(".show-more-3").slideDown(500);
    $(".examples-arrow").delay(5000).slideDown(500, () => {
        if(!done_obj6){
            interval = 500;
            Obj6.forEach(function(element, index){ 
                setTimeout(function () {
                    yIndex = yIndex + 2.5
                    console.log(element);
                    $(element).css(
                        "opacity","1"
                    )
    
                    $(element).css(
                        "transform",`translateY(${yIndex}px)`
                    );
    
                }, index * interval);
            })
        }
        done_obj6 = true;
    }).delay(2700).queue( function(){
        if(!done_obj7){
            interval = 300;
            Obj7.forEach(function(element, index){ 
                setTimeout(function () {
                    yIndex = yIndex + 2.5
                    console.log(element);
                    $(element).css(
                        "opacity","1"
                    )
    
                    $(element).css(
                        "transform",`translateY(${yIndex}px)`
                    );
    
                }, index * interval);
            })
        }
        done_obj7 = true;
        $(".animate-ended").delay(1000).slideDown(500);
    })


})
$(".examples-arrow").click(function() {
    $(".examples-arrow").css(
        "display", "none"
    )
    $(".fun-facts-pi").slideUp(500);
    $(".show-more-3").slideUp(500);
    $(".examples").delay(500).slideDown(500);
})
$(".examples").click(function() {
    $(".show-more-4").slideDown(500);
})


})

function UpdateTitle(newTitle){
    $(document).attr("title", "Liczba PI - " + newTitle);
}
