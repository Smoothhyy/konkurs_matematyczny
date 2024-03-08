InfoRowCont = $(".tInfoRowContainer")
var numberOfSlides = 6 //jeżeli coś się spierdoli po dodaniu nowych slajdów to zmień to < i pamiętaj żeby index w klasach był niepowtarzalny

$( document ).ready(function() {
    /* console.log */("jquery rready")

    
    
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
}



pasek =$("#treePasek") //tak wiem, głupie. Ale lepiej mi się tak organizować
function DisplayPasek(){
    PopIn(pasek);
}

function ChangeBackground(imageUrl){
    $("#pseudoBackground").append('<img id="imgBackground" src="img/tree/backgrounds/BGspace.jpg" class="img-fluid" alt="">')
}



/* -- START SKOPIUJ TO DO INNYCH START -- */
function PopIn(element){
    element.animate({
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


function ChangeSlide(){
   
    

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