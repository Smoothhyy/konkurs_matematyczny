InfoRowCont = $(".tInfoRowContainer")
var numberOfSlides = 6 //jeżeli coś się spierdoli po dodaniu nowych slajdów to zmień to < i pamiętaj żeby index w klasach był niepowtarzalny
let currMetaSlide = 0;
$( document ).ready(function() {
    /* console.log */("jquery rready")
    alert("dyduch nie zapomnij zmienić kolorów w drzewkach, tzn. A i B");
    
    
    InfoRowInitialize();
    DisplayCurrSlide(0)
    SpawnTrees()

    
});



tcon = $(".treeContainer")
function SpawnTrees(){
    tcon.each(function(index){
        orginal = null;
        orginal = $(this).html();
        markUps = orginal.split(" ")
        markUps = markUps.filter((word) => word != "")
         
        $(this).empty();
        for(i = 0; i <= markUps.length; i++){
            
            if(markUps[i] == "ENDROW"){
                $(this).append('<br>')
            }else if(markUps[i] == "SPACE"){
                $(this).append('<img src="img/tree/lE.png" alt="">')
                $(this).append('<img src="img/tree/lE.png" alt="">')
            }else{
                $(this).append('<img src="img/tree/'+markUps[i]+'.png" alt="">')
            }
        }        
    });
}
//<img src="img/tree/"++".png" alt=""><img src="img/tree/sB.png" alt=""><img src="img/tree/lE.png" alt=""><br>


ScInp = $("#scoreImput")

function CompareScore(){
    if(ScInp.val() > 8.3){
        $("#congratulations").css({
            display: "inline"
        })
    }

    $("#M4I1").append("<br>Wynik wysłany! Na następnej stronie będziesz, mógł/mogła porównać swój wynik ze średnią użytkowników.")
}



pasek =$("#treePasek") //tak wiem, głupie. Ale lepiej mi się tak organizować
function DisplayPasek(ifShow){
    if(ifShow){
        PopIn(pasek);
    }else{
        pasek.css("opacity", "0%")
    }
}

function ChangeBackground(imageUrl){
    $("#pseudoBackground").append('<img id="imgBackground" src="img/tree/backgrounds/BGspace.jpg" class="img-fluid" alt="">')
}

function playLoadingAnim(){
    
    PopIn($("#animationLoading"))
    $("#animationLoading").animate({
        color: "black"
    }, 1000, function(){
        $("#animationLoading").append(" . ")
        $("#animationLoading").animate({
            color: "black"
        }, 1000, function(){
            $("#animationLoading").append(" . ")
            $("#animationLoading").animate({
                color: "black"
            }, 1000, function(){
                $("#animationLoading").append(" . ")
                $("#animationLoading").animate({
                    color: "black"
                }, 1000, function(){
                    $("#animationLoading").append("<span style='color: red;'>BŁĄD!</span>")
                })
            })
        })
    })
}


/* -- START SKOPIUJ TO DO INNYCH START -- */
function PopIn(element){
    element.animate({
        opacity: "100%"
    }, 500)
}

let nSlidesLookup = [0, 5, 8, 5, 3, 6, 6]
let interCount = 1
function InternalSlideUpdate(direction){
    if(direction == "r"){
        if(interCount != nSlidesLookup[currMetaSlide]){
            interCount++;
        }
    }else if(direction == "l"){
        if(interCount != 1){
            interCount--;
        }
    }
    if(interCount == 1){
        $("#buttonChangeLeft").css("opacity", "0%")
    }else{
        $("#buttonChangeLeft").css("opacity", "100%")
    }
    if(interCount == nSlidesLookup[currMetaSlide]){
        $("#buttonChangeRight").css("opacity", "0%")
    }else{
        $("#buttonChangeRight").css("opacity", "100%")
    }

    console.log("interCout : " + interCount)

    
    for(var i = 0; i<20; i++){
        $("#M"+currMetaSlide+"I"+i+"").css("display", "none") 
    }
    $("#M"+currMetaSlide+"I"+interCount+"").css("display", "inline")

    if(currMetaSlide == 5 && interCount ==2){
        DisplayPasek(true)
        $("#M5I2").animate({
            color: "black"
        }, 3500, function(){
            PopIn($("#M5I2"))
        })
    }
}





function ChangeSlide(ifStart){
    if(ifStart == true){
        //jak to usunie to przestaje działać. Jestem kurwa zmęczony nie wiem co się dzieje
    }
    if(ifStart == true){
        currMetaSlide = 1;
    }

    $("#welcomeText").css("display", "none")
    currMetaSlide = $(this).attr('id').replace("tRow","");
    interCount = 1;
    if(currMetaSlide == 6){
        DisplayPasek(false)
    }
    InternalSlideUpdate("");

    $("#tArrow"+$(this).attr('id').replace("tRow","")).css("color", "lime") //NIE PRZEJMUJ SIĘ BŁĘDEM BO DZIAŁA I TAK ^w^
    $("#tInfoContent"+$(this).attr('id').replace("tRow","")).css("color", "lime") /* okej, to tez dziala xd */
    console.log(this);
    
    DisplayCurrSlide($(this).attr('id').replace("tRow",""))
    UpdateTitle($(this).text());

    
}

function UpdateTitle(newTitle){
    $(document).attr("title", "TREE(3) - " + newTitle);
}

function DisplayCurrSlide(toShow){
    for(i = 0; i <= numberOfSlides; ++i){
        $("#tMain" + i).css({
            display: "none",
            opacity: "0%"
        })
    }
    /* console.log(toShow) */
    
    $("#tRow" + toShow + "").css({
        display: "inline"
    })
    
    $("#tRow" + (parseInt(toShow)+1) + "").css({
        display: "inline"
    })


    

    $("#tMain"+toShow).css({
        display: "inline"
    })
    $("#tMain"+toShow).animate({
        opacity: "100%"
    }, 500)

}

function InfoRowInitialize(){
    const RczymJest = new InfoRow("Czym jest TREE3", 1)
    const RprosteWyt = new InfoRow("Proste wytłumaczenie", 2)
    const RtreePrz = new InfoRow("TREE1 i TREE2", 3)
    const RJakDuze = new InfoRow("Jak duże jest TREE3", 4)
    const RPoro = new InfoRow("Porównanie wielkości", 5)
    const RHist = new InfoRow("Zakończenie", 6)

    $(".tInfoRow").on("click", ChangeSlide)

    for(i = 0 ; i <= numberOfSlides; ++i){
        $("#tRow"+i+"").css({
            display: "none"  
        })
    }
}

class InfoRow{
    constructor(content, rowIndex){
        this.content = content;
        this.rowIndex = rowIndex;
        this.actualhtml = "<hr><div id='tRow"+rowIndex+"' class='tInfoRow'><div class='tInfoRow'><div id='tArrow"+rowIndex+"' class='tInfoArrow'><i class='bi bi-caret-right-fill'></i></div><div class='tInfoContent' id='tInfoContent"+rowIndex+"'>"+content+"</div></div>";

        this.appentToInfo(this.actualhtml);
    }
    appentToInfo(jqCont){
        InfoRowCont.append(jqCont)
    }
}
/* -- END SKOPIUJ TO DO INNYCH END -- */