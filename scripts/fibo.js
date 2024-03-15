InfoRowCont = $(".tInfoRowContainer")
var numberOfSlides = 6 //jeżeli coś się spierdoli po dodaniu nowych slajdów to zmień to < i pamiętaj żeby index w klasach był niepowtarzalny
let currMetaSlide = 0;
$( document ).ready(function() {
    /* console.log */("jquery rready")
    alert("dodaj Apophenia do tego że znajdowanie to przypadek nie zpomnij")
    
    
    InfoRowInitialize();
    DisplayCurrSlide(0)
    
    SpawnFibo()
});

function CheckAnswers(){
    if($("#zad1").val() == Fibonacci(13)){
        $("#Z1").append("⭐")
    }else{
        $("#Z1").append("Poprawna odpowiedź: " + Fibonacci(13))
    }
    if($("#zad2").val() == Fibonacci(16)){
        $("#Z2").append("⭐")
    }else{
        $("#Z2").append("Poprawna odpowiedź: " + Fibonacci(16))
    }
    if($("#zad3").val() == Fibonacci(19)){
        $("#Z3").append("⭐")
    }else{
        $("#Z3").append("Poprawna odpowiedź: " + Fibonacci(19))
    }
    $("#checkAnswers").css("display", "none")
}


function Fibonacci(n) {
    if(n < 2) return n;
    return (Fibonacci(n - 1) + Fibonacci(n - 2));
}


fcon = $(".FIBO")
function SpawnFibo(){
    fcon.each(function(index){
        orginal = null;
        orginal = $(this).html();
        markUps = orginal.split(" ")
        markUps = markUps.filter((word) => word != "")
         
        $(this).empty();
        $(this).append(Fibonacci(markUps))
             
    });
}


function openSound(){
    $("#noSound").css({
        display: "inline"
    })
}

let currFibo = 0;
mcon = $("#numberContainer")
function generateModulo(){
    for(var i = 0; i < 33; ++i){
        currFibo = Fibonacci(i);
        if(i%16 == 0){
            mcon.append("<h5 style='background-color: grey;'>"+i+". |"+currFibo+":7 = <span style='float:right;'>"+currFibo%7+"</span></h5>")
        }else{
            mcon.append("<h5>"+i+". |"+currFibo+":7 = <span style='float:right;'>"+currFibo%7+"</span></h5>")
        }
    }

    $("#genMod").css("display", "none")
}



function PopIn(element){
    element.animate({
        opacity: "100%"
    }, 500)
}

let nSlidesLookup = [0, 6, 6, 5, 3, 6, 6]
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
    const RczymJest = new InfoRow("Czym jest ciąg Fibonacciego?", 1)
    const RprosteWyt = new InfoRow("Złoty Podział", 2)
    const RtreePrz = new InfoRow("Złoty podział a ciąg Fibonacciego", 3)
    const RJakDuze = new InfoRow("Ciąg Fibonacciego w naturze", 4)
    const RPoro = new InfoRow("Ciąg Fibonacciego w muzyce", 5)
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