InfoRowCont = $(".tInfoRowContainer")
var numberOfSlides = 6 //jeżeli coś się spierdoli po dodaniu nowych slajdów to zmień to < i pamiętaj żeby index w klasach był niepowtarzalny
let currMetaSlide = 0;
$( document ).ready(function() {
    /* console.log */("jquery rready")

    
    
    InfoRowInitialize();
    DisplayCurrSlide(0)
    
});


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
    
    InternalSlideUpdate("");

    $("#tArrow"+$(this).attr('id').replace("tRow","")).css("color", "lime") //NIE PRZEJMUJ SIĘ BŁĘDEM BO DZIAŁA I TAK ^w^
    $("#tInfoContent"+$(this).attr('id').replace("tRow","")).css("color", "lime") /* okej, to tez dziala xd */
    console.log(this);
    
    DisplayCurrSlide($(this).attr('id').replace("tRow",""))
    UpdateTitle($(this).text());

    
}

function UpdateTitle(newTitle){
    $(document).attr("title", "" + newTitle);
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
    const RczymJest = new InfoRow("Czym jest ciąg fibonacciego?", 1)
    const RprosteWyt = new InfoRow("Proste wytłumaczenie", 2)
    const RtreePrz = new InfoRow("Złoty podział", 3)
    const RJakDuze = new InfoRow("Ciąg Fibonacciego w naturze", 4)
    const RPoro = new InfoRow("Ciąg Fibonacciego w innych miejscach", 5)
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